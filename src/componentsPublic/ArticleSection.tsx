import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt?: string;
  description?: string;
  thumbnail?: string;
  image?: string;
  published_at?: string;
  createdAt?: string;
}

export const ArticleSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://37.1.208.64:3000/api/articles');
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        setArticles(data.slice(0, 3));
      } catch (error) {
        console.error("Gagal mengambil data artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-[#00BFFF] text-xs font-semibold tracking-wider uppercase">03 // Insight & News</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Latest Articles</h2>
        </div>
        <Link 
          to="/articles" 
          className="mt-4 md:mt-0 text-[#00BFFF] hover:underline flex items-center gap-2 text-sm font-medium"
        >
          Lihat Semua Artikel &rarr;
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10 text-slate-400">Memuat artikel...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => {
            const imgUrl = item.thumbnail || item.image || 'https://via.placeholder.com/600x400/0b1021/00BFFF?text=Centa+Article';
            return (
              <div 
                key={item.id}
                className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00BFFF]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-40 w-full overflow-hidden bg-slate-800">
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
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2">
                      {item.excerpt || item.description || ''}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    to={`/articles/${item.id}`}
                    className="text-xs font-medium text-[#00BFFF] hover:underline"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ArticleSection;