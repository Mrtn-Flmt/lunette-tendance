import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Shield, Truck, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Lunettes De Dur à Cuire
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#tendance" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              La Tendance
            </Link>
            <Link href="#produit" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Le Produit
            </Link>
            <Link href="#commander" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Commander
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Contenu texte */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              {/* Badge tendance */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <p className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">Tendance du moment</p>
              </div>

              {/* Titre principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900">
                Dur à Cuire
              </h1>

              {/* Sous-titre produit */}
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                Pacific S01
              </p>

              {/* Prix proéminent */}
              <div className="flex items-baseline justify-center lg:justify-start gap-2 py-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">29€</span>
                <span className="text-sm sm:text-base text-slate-500 line-through">60€</span>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Le style qui fait le buzz. Les lunettes de soleil qui ont conquis les réseaux.
                Design aviateur premium, attitude badass garantie.
                <span className="font-semibold text-slate-900"> Surfez sur la tendance.</span>
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="#commander">Je veux le look maintenant</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold"
                  asChild
                >
                  <Link href="#tendance">Découvrir la tendance</Link>
                </Button>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-sm sm:text-base">4.9/5</span>
                  <span className="text-xs sm:text-sm text-slate-600">(2.3k avis)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-green-600">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>En stock</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600">
                  <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Livraison gratuite à partir de 50€</span>
                </div>
              </div>
            </div>

            {/* Image produit */}
            <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl bg-slate-50 p-4 sm:p-6 md:p-8 flex items-center justify-center shadow-2xl border border-blue-100">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/lunette.jpg"
                    alt="Lunettes de soleil Pacific S01 - Style dur à cuire"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full max-w-full"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trend Section */}
      <section id="tendance" className="bg-slate-50 py-16 md:py-20 border-y border-red-100 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full font-bold text-sm">
              <TrendingUp className="h-4 w-4" />
              VIRAL SUR LES RÉSEAUX
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              Le Look Qui Fait Le Buzz
            </h3>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Ces lunettes ont conquis les réseaux sociaux. Style dur à cuire, attitude badass,
              design intemporel. C'est le look qu'il vous faut pour affirmer votre personnalité.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Card className="border border-red-100 bg-white hover:border-red-200 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">🔥</div>
                  <CardTitle className="text-xl text-slate-900">Tendance</CardTitle>
                  <CardDescription className="text-base">
                    Le style qui cartonne sur TikTok, Instagram et Twitter
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-blue-100 bg-white hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">💪</div>
                  <CardTitle className="text-xl text-slate-900">Attitude</CardTitle>
                  <CardDescription className="text-base">
                    Un look dur à cuire qui affirme votre personnalité
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-red-100 bg-white hover:border-red-200 transition-colors sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="text-4xl mb-2">⭐</div>
                  <CardTitle className="text-xl text-slate-900">Premium</CardTitle>
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
      <section id="caracteristiques" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900">Pourquoi Pacific S01 ?</h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Le style dur à cuire qui allie tendance, qualité et protection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-blue-200">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Protection UV 100%</CardTitle>
                <CardDescription className="text-base">
                  Protection totale contre les rayons UVA et UVB. Vos yeux sont protégés, votre style est assuré.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-blue-200">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Qualité Premium</CardTitle>
                <CardDescription className="text-base">
                  Monture métallique robuste, verres haute qualité. Un look qui dure, un style qui marque.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-red-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-red-200 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Made in France</CardTitle>
                <CardDescription className="text-base">
                  Design et fabrication française. Qualité, authenticité, fierté. Le savoir-faire français à son apogée.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="produit" className="container mx-auto px-4 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900">Les Spécifications</h3>
            <p className="text-base sm:text-lg text-slate-600">Tout ce qu'il faut savoir sur le produit</p>
          </div>
          <Card className="shadow-2xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-black text-slate-900">Lunettes de soleil dur à cuire - Pacific S01</CardTitle>
              <CardDescription className="text-base sm:text-lg">
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
      <section id="commander" className="bg-slate-900 py-16 md:py-20 text-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border border-blue-500/20 bg-slate-800">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl sm:text-4xl font-black mb-2 text-white">Rejoignez la Tendance</CardTitle>
                <CardDescription className="text-lg sm:text-xl text-slate-300">
                  Prix : <span className="text-3xl sm:text-4xl font-black text-blue-400">29€</span>
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
                  <div className="flex items-center justify-between p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                    <span className="font-black text-lg sm:text-xl text-white">Total</span>
                    <span className="text-3xl sm:text-4xl font-black text-blue-400">29€</span>
                  </div>
                </div>
                <Button size="lg" className="w-full text-base sm:text-lg py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl" asChild>
                  <Link href="/checkout">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Je veux le look maintenant
                  </Link>
                </Button>
                <p className="text-xs sm:text-sm text-center text-slate-400">
                  🔒 Paiement sécurisé • 🚚 Livraison 3-5 jours • ↩️ Retours gratuits 30 jours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="font-black text-lg text-slate-900">Lunettes de soleil dur à cuire</p>
            <p className="text-sm text-slate-600">Le style dur à cuire qui fait le buzz</p>
            <p className="text-xs text-slate-500 mt-4">© 2024 Tous droits réservés</p>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-100">
            <p className="text-xs text-slate-500">
              Développé par{" "}
              <Link
                href="https://www.flmtech.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                FLMTECH
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
