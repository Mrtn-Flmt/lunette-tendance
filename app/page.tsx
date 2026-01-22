import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Shield, Truck, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Lunettes De Dur à Cuire
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#tendance" className="text-sm font-medium hover:text-primary transition-colors">
              La Tendance
            </Link>
            <Link href="#produit" className="text-sm font-medium hover:text-primary transition-colors">
              Le Produit
            </Link>
            <Link href="#commander" className="text-sm font-medium hover:text-primary transition-colors">
              Commander
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-red-500" />
                <p className="text-sm font-bold text-red-500 uppercase tracking-wider">Tendance du moment</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Dur à Cuire
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-slate-700">
                Pacific S01
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le style qui fait le buzz. Les lunettes de soleil qui ont conquis les réseaux.
                Design aviateur premium, attitude badass garantie.
                <span className="font-semibold text-slate-900"> Surfez sur la tendance.</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600" asChild>
                <Link href="#commander">Je veux le look</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" asChild>
                <Link href="#tendance">Découvrir la tendance</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">4.9/5</span>
                <span className="text-sm text-muted-foreground">(2.3k avis)</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                <Zap className="h-4 w-4" />
                <span>En stock</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl bg-white p-8 flex items-center justify-center shadow-2xl border-4 border-slate-200">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/lunette.jpg"
                alt="Lunettes de soleil Pacific S01 - Style dur à cuire"
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trend Section */}
      <section id="tendance" className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 border-y-4 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full font-bold text-sm">
              <TrendingUp className="h-4 w-4" />
              VIRAL SUR LES RÉSEAUX
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">
              Le Look Qui Fait Le Buzz
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Ces lunettes ont conquis les réseaux sociaux. Style dur à cuire, attitude badass,
              design intemporel. C'est le look qu'il vous faut pour affirmer votre personnalité.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">🔥</div>
                  <CardTitle className="text-xl">Tendance</CardTitle>
                  <CardDescription className="text-base">
                    Le style qui cartonne sur TikTok, Instagram et Twitter
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">💪</div>
                  <CardTitle className="text-xl">Attitude</CardTitle>
                  <CardDescription className="text-base">
                    Un look dur à cuire qui affirme votre personnalité
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 border-red-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-2">⭐</div>
                  <CardTitle className="text-xl">Premium</CardTitle>
                  <CardDescription className="text-base">
                    Qualité française, design intemporel, finition soignée
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristiques" className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4 text-slate-900">Pourquoi Pacific S01 ?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le style dur à cuire qui allie tendance, qualité et protection
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Protection UV 100%</CardTitle>
                <CardDescription className="text-base">
                  Protection totale contre les rayons UVA et UVB. Vos yeux sont protégés, votre style est assuré.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-4 shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Qualité Premium</CardTitle>
                <CardDescription className="text-base">
                  Monture métallique robuste, verres haute qualité. Un look qui dure, un style qui marque.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Made in France</CardTitle>
                <CardDescription className="text-base">
                  Design et fabrication française. Qualité, authenticité, fierté. Le savoir-faire français à son apogée.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="produit" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4 text-slate-900">Les Spécifications</h3>
            <p className="text-lg text-muted-foreground">Tout ce qu'il faut savoir sur le produit</p>
          </div>
          <Card className="shadow-2xl border-2 border-slate-200">
            <CardHeader>
              <CardTitle className="text-3xl font-black">Henry Julien - Pacific S01</CardTitle>
              <CardDescription className="text-lg">
                Lunettes de soleil aviateur style dur à cuire - Verres bleus miroir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Caractéristiques</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Forme : Aviateur (teardrop)</li>
                    <li>• Verres : Bleu miroir</li>
                    <li>• Monture : Métal argenté</li>
                    <li>• Protection : UV 100%</li>
                    <li>• Longueur branche : 145mm</li>
                    <li>• Origine : Made in France</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spécifications</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Marquage CE conforme</li>
                    <li>• Plaquettes de nez ajustables</li>
                    <li>• Manchons d'oreilles noirs</li>
                    <li>• Design intemporel</li>
                    <li>• Qualité premium</li>
                    <li>• Garantie constructeur</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Order Section */}
      <section id="commander" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-black mb-2 text-white">Rejoignez la Tendance</CardTitle>
                <CardDescription className="text-xl text-slate-300">
                  Prix : <span className="text-3xl font-black text-white">149€</span>
                </CardDescription>
                <p className="text-sm text-slate-400 mt-2">Le look dur à cuire qui fait le buzz</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <span className="font-semibold text-white">Produit</span>
                    <span className="font-bold text-white">Pacific S01</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <span className="font-semibold text-white">Livraison</span>
                    <span className="text-green-400 font-bold">Gratuite</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg border-2 border-red-500">
                    <span className="font-black text-lg text-white">Total</span>
                    <span className="text-3xl font-black text-white">149€</span>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-bold" asChild>
                  <Link href="/checkout">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Je veux le look maintenant
                  </Link>
                </Button>
                <p className="text-xs text-center text-slate-400">
                  🔒 Paiement sécurisé • 🚚 Livraison 3-5 jours • ↩️ Retours gratuits 30 jours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-slate-200 bg-gradient-to-b from-white to-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="font-black text-lg text-slate-900">Henry Julien</p>
            <p className="text-sm text-muted-foreground">Le style dur à cuire qui fait le buzz</p>
            <p className="text-xs text-muted-foreground mt-4">© 2024 Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
