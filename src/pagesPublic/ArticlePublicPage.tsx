import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt?: string;
  description?: string;
  thumbnail?: string;
  image?: string;
  createdAt?: string;
  published_at?: string;
}

export const ArticlePublicPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://37.1.208.64:3000/api/articles');
        if (!response.ok) throw new Error('Network response failed');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Gagal mengambil data artikel:", error);
        setArticles([
          {
            id: 1,
            title: "Panduan Penetration Testing untuk Pemula",
            excerpt: "Edukasi mengenai dasar-dasar pengujian celah keamanan web.",
            thumbnail: "https://via.placeholder.com/600x400/0b1021/00BFFF?text=Security+Testing",
            published_at: "08 Aug 2026 • 14:30 WIB"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'Dipublikasikan';
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="text-[#00BFFF] text-xs font-semibold tracking-wider uppercase">Publications</span>
        <h1 className="text-4xl font-bold text-white mt-1 mb-2">Latest Articles & News</h1>
        <p className="text-slate-400">Artikel dan update berita terbaru yang telah dipublikasikan.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400">Memuat artikel...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => {
            const imgUrl = item.thumbnail || item.image || 'https://via.placeholder.com/600x400/0b1021/00BFFF?text=Centa+Article';
            const displayDate = formatDate(item.published_at || item.createdAt);
            const displayExcerpt = item.excerpt || item.description || '';

            return (
              <div 
                key={item.id} 
                className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00BFFF]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden bg-slate-800">
                    <img 
                      src={imgUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/0b1021/00BFFF?text=Centa+Article';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-[#00BFFF] font-medium block mb-2">
                      📅 {displayDate}
                    </span>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                      {displayExcerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link 
                    to={`/articles/${item.id}`} 
                    className="text-[#00BFFF] text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticlePublicPage;