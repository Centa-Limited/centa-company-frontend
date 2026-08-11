import React, { useEffect, useState } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

export const ServicePublicPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://37.1.208.64:3000/api/services');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Gagal mengambil data service:", error);
        setServices([
          { id: 1, title: "Web Development", description: "Building modern website solutions for business growth." },
          { id: 2, title: "Cyber Security", description: "Security testing, vulnerability assessment, and protection." }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleOpenOrderModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://37.1.208.64:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: selectedService?.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes
        })
      });

      if (res.ok) {
        alert(`Order untuk "${selectedService?.title}" berhasil dikirim!`);
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', notes: '' });
      } else {
        alert("Gagal mengirim order. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error order:", error);
      alert("Terjadi kesalahan koneksi ke server.");
    }
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-[#00BFFF] text-xs font-semibold tracking-wider uppercase">Our Expertise</span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-4">Services & Solutions</h1>
        <p className="text-slate-400">Layanan profesional dari Centa Limited untuk mendukung skala bisnis Anda.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-400">Memuat layanan...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl hover:border-[#00BFFF]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#00BFFF] mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => handleOpenOrderModal(item)}
                className="w-full py-3 bg-[#00BFFF] text-[#050816] font-semibold rounded-lg hover:bg-[#00BFFF]/80 transition-colors text-sm"
              >
                Order / Konsultasi Service Ini &rarr;
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form Order */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#0b1021] border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Form Order Service</h3>
            <p className="text-xs text-[#00BFFF] mb-6">Layanan: {selectedService.title}</p>

            <form onSubmit={handleOrderSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-slate-300 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-[#00BFFF] outline-none"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-[#00BFFF] outline-none"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Nomor WhatsApp / HP</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-[#00BFFF] outline-none"
                  placeholder="08123456789"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Catatan Kebutuhan</label>
                <textarea 
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:border-[#00BFFF] outline-none"
                  placeholder="Jelaskan kebutuhan spesifik project Anda..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00BFFF] text-[#050816] font-bold py-3 rounded-lg hover:bg-[#00BFFF]/80 transition-colors mt-2"
              >
                Kirim Permintaan Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePublicPage;