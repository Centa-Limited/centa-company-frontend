import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ArticleDetail {
  id: number;
  title: string;
  content?: string;
  description?: string;
  excerpt?: string;
  thumbnail?: string;
  image?: string;
  published_at?: string;
  createdAt?: string;
}

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://37.1.208.64:3000/api/articles/${id}`);
        if (!response.ok) throw new Error('Failed to fetch article detail');
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Gagal mengambil detail artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchArticleDetail();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-slate-400">Memuat artikel...</div>;
  }

  if (!article) {
    return (
      <div className="text-center py-20 text-slate-400">
        <p className="mb-4">Artikel tidak ditemukan.</p>
        <Link to="/articles" className="text-[#00BFFF] hover:underline">&larr; Kembali ke Daftar Artikel</Link>
      </div>
    );
  }

  const imgUrl = article.thumbnail || article.image || 'https://via.placeholder.com/800x400/0b1021/00BFFF?text=Centa+Article';

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto text-slate-300">
      <Link to="/articles" className="text-[#00BFFF] text-sm mb-8 inline-block hover:underline">
        &larr; Kembali ke Daftar Artikel
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {article.title}
      </h1>

      <p className="text-slate-500 text-sm mb-8">
        Dipublikasikan pada {article.published_at || article.createdAt || 'Baru Saja'}
      </p>

      <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-slate-800">
        <img 
          src={imgUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400/0b1021/00BFFF?text=Centa+Article';
          }}
        />
      </div>

      <div className="space-y-6 leading-relaxed border-t border-white/10 pt-8 text-slate-300">
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <p>{article.description || article.excerpt || "Tidak ada konten untuk ditampilkan."}</p>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailPage;