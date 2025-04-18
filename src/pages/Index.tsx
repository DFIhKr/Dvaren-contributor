
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Phone, DollarSign, Users, Clock, BadgeDollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Business Plan Analytical
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Kami membantu Anda meraih penghasilan tambahan melalui Vista Create. Setiap desain yang lolos akan dihargai $5 atau setara Rp 80.000 per desainnya.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Target Market & Masalah Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Target Market</h2>
            <p className="text-gray-600">
              Mahasiswa atau pelajar yang ingin mendapatkan penghasilan tambahan melalui kemampuan desain mereka.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Masalah</h2>
            <p className="text-gray-600">
              Banyak mahasiswa yang memiliki kemampuan desain namun belum memiliki platform untuk menghasilkan uang dari kemampuan tersebut.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Kami menawarkan akun kontributor Vista Create yang memungkinkan Anda menghasilkan uang dari setiap desain yang lolos. Setiap desain dihargai $5 (Rp 80.000).
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/ab180f45-961b-459e-a6c2-9662b58f05ec.png" 
                alt="Vista Create Solution" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Benefits yang didapatkan ketika memakai produk kami
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <DollarSign className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Biaya Murah</h3>
              <p className="text-gray-600">Investasi sekali untuk penghasilan jangka panjang</p>
            </Card>
            <Card className="p-6">
              <Clock className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Freelance</h3>
              <p className="text-gray-600">Waktu kerja fleksibel sesuai keinginan Anda</p>
            </Card>
            <Card className="p-6">
              <BadgeDollarSign className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Harga Affordable</h3>
              <p className="text-gray-600">Harga terjangkau dengan potensi keuntungan besar</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-8">Harga Produk Kami</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <img 
              src="/lovable-uploads/cdc53dfb-24c6-4934-8a55-104e567e248d.png" 
              alt="Vista Create Logo" 
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-4xl font-bold text-blue-500 mb-4">
              <span className="line-through text-gray-400 text-2xl">Rp 50.000</span>
              <br />
              Rp 35.000
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Testimoni</h2>
          <div className="max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/d494dbb9-e42a-4b25-a220-3b5dfdad32ad.png" 
              alt="Testimonial" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-8">Hubungi Kami</h2>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/dv4ren" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
              @dv4ren
            </a>
            <a href="https://wa.me/085753412433" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
              <Phone className="w-6 h-6" />
              0857-5341-2433
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
