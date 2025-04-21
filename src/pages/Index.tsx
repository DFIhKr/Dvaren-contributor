
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Phone, Award, Zap, DollarSign, Users, Clock, BadgeDollarSign, Palette, Wand2, BrainCircuit, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative px-4 py-24 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-purple-200/50 to-pink-100/80 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md leading-tight animate-pop">
                Hasilkan Uang dari Desainmu 💸🎉
              </h1>
              <p className="text-gray-600 text-xl mb-8 drop-shadow-sm">
                Mulai perjalanan kreatifmu sebagai kontributor Vista Create.<br/> Setiap desain yang diterima bernilai <b className="text-purple-600">$5 (Rp 80.000)</b>. Ekspresikan gaya seserumu, temukan komunitasnya, dan dapatkan cuan!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold shadow-fun hover:from-indigo-600 hover:to-pink-600 transition-all drop-shadow-lg">
                <Sparkles className="mr-2 h-5 w-5 animate-bounce" /> Mulai Sekarang!
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-indigo-400/30 to-pink-400/20 rounded-xl blur-lg z-0"></div>
              <img 
                src="/lovable-uploads/ab180f45-961b-459e-a6c2-9662b58f05ec.png" 
                alt="Vista Create Platform" 
                className="relative rounded-xl shadow-magic border-4 border-white/20 hover:scale-105 transition-transform duration-300 z-10"
                style={{maxHeight: 330}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
            Kenapa Gabung Vista Create?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-blue-100 to-white border-0 shadow-fun hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <Palette className="w-14 h-14 text-indigo-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-2 text-indigo-700">Kebebasan Berkreasi</h3>
              <p className="text-gray-700">Ekspresikan kreatifitasmu tanpa batas, gaya bebas rame juga bisa!</p>
              <div className="absolute bottom-1 right-8 blur-[2px] opacity-40 animate-pulse w-16 h-12 rounded-full bg-gradient-to-tr from-blue-400/60 to-emerald-200/30 rotate-45"></div>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-purple-100 to-white border-0 shadow-fun hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <DollarSign className="w-14 h-14 text-purple-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-2 text-purple-700">Penghasilan Konsisten</h3>
              <p className="text-gray-700">Setiap desain terima, dompet makin tebal! Gampang dan fun banget.</p>
              <div className="absolute top-0 left-10 w-12 h-12 bg-gradient-to-tr from-purple-300 via-pink-200 to-yellow-300 rounded-full blur-lg opacity-30 animate-fade-in"></div>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-pink-100 to-white border-0 shadow-fun hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <BrainCircuit className="w-14 h-14 text-fuchsia-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold mb-2 text-pink-700">Skill Naik Kelas</h3>
              <p className="text-gray-700">Dapat feedback langsung, jadi makin jago dan PD tampil karya!</p>
              <div className="absolute right-1 top-3 w-14 h-8 bg-fuchsia-200/60 rounded-full blur-md opacity-30"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100/60 via-pink-50/80 to-yellow-50/90">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-12">Cara Join</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center rounded-xl bg-white/70 shadow-sm py-7 px-5 hover:scale-105 hover:bg-white transition-all duration-200 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4 shadow-fun">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-bold mb-2 text-large">Daftar</h3>
              <p className="text-gray-700">Gabung & jadi kontributor Vista Create.</p>
            </div>
            <div className="text-center rounded-xl bg-white/70 shadow-sm py-7 px-5 hover:scale-105 hover:bg-white transition-all duration-200 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 shadow-fun">
                <Wand2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2 text-large">Desain</h3>
              <p className="text-gray-700">Bikin desain seru pake feel kamu sendiri!</p>
            </div>
            <div className="text-center rounded-xl bg-white/70 shadow-sm py-7 px-5 hover:scale-105 hover:bg-white transition-all duration-200 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4 shadow-fun">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold mb-2 text-large">Submit</h3>
              <p className="text-gray-700">Upload desain dan tunggu review, super mudah!</p>
            </div>
            <div className="text-center rounded-xl bg-white/70 shadow-sm py-7 px-5 hover:scale-105 hover:bg-white transition-all duration-200 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 shadow-fun">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2 text-large">Cuan Masuk!</h3>
              <p className="text-gray-700">Setiap desain diterima, saldo bertambah 💸</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Kenapa Harus Coba?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-yellow-100/60 to-pink-50 border-0 shadow-fun group hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden">
              <DollarSign className="w-12 h-12 text-yellow-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-bold mb-2">Modal Receh</h3>
              <p className="text-gray-700">Topup sekali, penghasilan berkali-kali!</p>
              <span className="absolute left-0 top-0 w-16 h-10 bg-yellow-300 rounded-full blur-md opacity-30"></span>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-pink-100/60 to-indigo-50 border-0 shadow-fun group hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden">
              <Clock className="w-12 h-12 text-pink-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-bold mb-2">Bebas Waktu</h3>
              <p className="text-gray-700">Kerja santai, sesuai mood kamu aja. </p>
            </Card>
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-indigo-100/60 to-yellow-50 border-0 shadow-fun group hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden">
              <BadgeDollarSign className="w-12 h-12 text-indigo-500 mb-4 group-hover:animate-bounce" />
              <h3 className="text-lg font-bold mb-2">Cuan MAX</h3>
              <p className="text-gray-700">Kumpulin passive income tiap minggu!</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50/90 via-yellow-50/60 to-indigo-100/90">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-pink-600 via-indigo-500 to-yellow-500 bg-clip-text text-transparent">
            Investasi Receh, Untung Banyak
          </h2>
          <div className="max-w-md mx-auto">
            <Card className="p-10 rounded-3xl shadow-fun bg-white/80 border-0 backdrop-blur-lg hover:scale-105 transition-all duration-300 relative animate-pop">
              <img 
                src="/lovable-uploads/cdc53dfb-24c6-4934-8a55-104e567e248d.png" 
                alt="Vista Create Logo" 
                className="w-24 h-24 mx-auto mb-6 drop-shadow-lg animate-bounce"
              />
              <div className="space-y-2 mb-6">
                <p className="text-gray-700 tracking-wide">Akun Kontributor Vista Create</p>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                  <span className="line-through text-gray-400 text-2xl">Rp 50.000</span>
                  <br />
                  Rp 35.000
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold shadow-fun hover:from-indigo-700 hover:to-pink-700 hover:scale-105 transition-all drop-shadow-lg text-lg py-6 animate-pop">
                Mulai Sekarang
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-yellow-500 bg-clip-text text-transparent">
            Kata Mereka
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="p-6 rounded-2xl shadow-fun bg-white/80 hover:shadow-lg animate-fade-in">
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
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-100/60 via-pink-50/80 to-yellow-50/70">
        <div className="container mx-auto max-w-6xl text-center rounded-3xl drop-shadow-lg bg-white/50 backdrop-blur-md py-10">
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-pink-600 via-indigo-600 to-yellow-500 bg-clip-text text-transparent">
            Hubungi Kami
          </h2>
          <p className="text-gray-700 mb-8">
            Ada pertanyaan? Langsung aja DM/WA, selalu open buat diskusi seputar desain dan akun Vista Create!
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/dv4ren" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 hover:text-pink-600 transition-colors text-lg font-bold drop-shadow-sm">
              <Instagram className="w-6 h-6" />
              @dv4ren
            </a>
            <a href="https://wa.me/085753412433" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-600 hover:text-pink-600 transition-colors text-lg font-bold drop-shadow-sm">
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
