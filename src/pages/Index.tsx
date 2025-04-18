import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Phone, DollarSign, Users, Clock, BadgeDollarSign, Palette, Wand2, BrainCircuit, Sparkles, Award, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section with enhanced gradients */}
      <section className="px-4 py-24 bg-gradient-to-br from-blue-50/80 via-indigo-50/90 to-purple-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)]"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Hasilkan Uang dari Desainmu
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Mulai perjalanan kreatifmu sebagai kontributor Vista Create. Setiap desain yang diterima bernilai $5 (Rp 80.000). Jadilah bagian dari komunitas desainer global hari ini!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all">
                <Sparkles className="mr-2 h-5 w-5" /> Mulai Sekarang
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
              <img 
                src="/lovable-uploads/ab180f45-961b-459e-a6c2-9662b58f05ec.png" 
                alt="Vista Create Platform" 
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mengapa Bergabung dengan Kami?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 border border-blue-100/50">
              <Palette className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Kebebasan Berkreasi</h3>
              <p className="text-gray-600">Ekspresikan kreativitasmu tanpa batas melalui platform Vista Create.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/50 border border-purple-100/50">
              <DollarSign className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Penghasilan Konsisten</h3>
              <p className="text-gray-600">Dapatkan $5 (Rp 80.000) untuk setiap desain yang diterima.</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100/50">
              <BrainCircuit className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Pengembangan Skill</h3>
              <p className="text-gray-600">Tingkatkan kemampuan desainmu dengan feedback langsung.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Daftar</h3>
              <p className="text-gray-600">Bergabung sebagai kontributor Vista Create</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Desain</h3>
              <p className="text-gray-600">Buat desain kreatif sesuai guidelines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-bold mb-2">Submit</h3>
              <p className="text-gray-600">Kirimkan desainmu untuk direview</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Dapatkan Bayaran</h3>
              <p className="text-gray-600">Terima $5 untuk setiap desain yang diterima</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Keuntungan Menjadi Kontributor
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <DollarSign className="w-10 h-10 text-blue-500 mb-4 relative z-10" />
              <h3 className="font-bold mb-2 relative z-10">Biaya Terjangkau</h3>
              <p className="text-gray-600 relative z-10">Investasi sekali untuk penghasilan jangka panjang</p>
            </Card>
            <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <Clock className="w-10 h-10 text-purple-500 mb-4 relative z-10" />
              <h3 className="font-bold mb-2 relative z-10">Waktu Fleksibel</h3>
              <p className="text-gray-600 relative z-10">Bekerja sesuai jadwal dan kenyamananmu</p>
            </Card>
            <Card className="p-6 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 transform group-hover:scale-95 transition-transform duration-300"></div>
              <BadgeDollarSign className="w-10 h-10 text-indigo-500 mb-4 relative z-10" />
              <h3 className="font-bold mb-2 relative z-10">Potensi Besar</h3>
              <p className="text-gray-600 relative z-10">Hasilkan penghasilan tambahan yang signifikan</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Investasi untuk Masa Depanmu
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="p-8 transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur border border-blue-100/50 shadow-xl">
              <img 
                src="/lovable-uploads/cdc53dfb-24c6-4934-8a55-104e567e248d.png" 
                alt="Vista Create Logo" 
                className="w-24 h-24 mx-auto mb-6"
              />
              <div className="space-y-2 mb-6">
                <p className="text-gray-600">Akun Kontributor Vista Create</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <span className="line-through text-gray-400 text-2xl">Rp 50.000</span>
                  <br />
                  Rp 35.000
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all">
                Mulai Sekarang
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Testimoni Kontributor
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="p-6">
                    <img 
                      src="/lovable-uploads/d494dbb9-e42a-4b25-a220-3b5dfdad32ad.png" 
                      alt="Testimonial" 
                      className="rounded-lg shadow-lg mx-auto"
                    />
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mb-8">Punya pertanyaan? Jangan ragu untuk menghubungi kami</p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/dv4ren" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <Instagram className="w-6 h-6" />
              @dv4ren
            </a>
            <a href="https://wa.me/085753412433" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
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
