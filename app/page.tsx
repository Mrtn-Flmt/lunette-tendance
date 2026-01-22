"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Shield, Truck, Star, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Home() {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {t("common.brand")}
            </h1>
            <span className="hidden sm:inline text-xs font-medium text-slate-500 italic">{t("common.styleEmmanuel")}</span>
            <span className="hidden lg:inline text-[10px] text-slate-400 italic ml-2">{t("common.weAssume")}</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("tendance")}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {t("nav.trend")}
              </button>
              <button
                onClick={() => scrollToSection("produit")}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {t("nav.product")}
              </button>
              <button
                onClick={() => scrollToSection("commander")}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {t("nav.order")}
              </button>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center py-8 md:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/new.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/45 to-white/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/35" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <div className="backdrop-blur-sm bg-red-500/20 border border-red-500/40 rounded-full px-4 py-1.5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                    <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider">{t("home.hero.trendBadge")}</p>
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/25 to-red-500/25 border border-blue-500/40 rounded-full px-4 py-1.5">
                  <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent uppercase tracking-wider">
                    {t("common.styleEmmanuel")}
                  </p>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 drop-shadow-lg">
                {t("home.hero.title")}
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 drop-shadow-md">
                {t("home.hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center lg:justify-start gap-3 py-2">
                <div className="backdrop-blur-sm bg-white/70 border border-white/50 rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">{t("home.hero.price")}</span>
                  <span className="text-sm sm:text-base text-slate-500 line-through ml-2">{t("home.hero.priceStrikethrough")}</span>
                </div>
                <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/30 to-red-500/30 border-2 border-blue-400/50 rounded-full px-4 sm:px-6 py-2 shadow-lg">
                  <p className="text-base sm:text-lg font-black bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                    {t("home.hero.freeForFriends")}
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/70 rounded-lg p-4 sm:p-6 border border-white/50 shadow-lg max-w-xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  <span className="font-semibold text-slate-900 italic">{t("home.hero.description").split(". ")[0]}.</span> {t("home.hero.description").split(". ").slice(1).join(". ")}
                  <span className="font-semibold text-slate-900"> {t("home.hero.descriptionEnd")}</span>
                  <span className="text-sm text-slate-600 italic block mt-2">{t("home.hero.descriptionFootnote")}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("commander")}
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  {t("home.hero.ctaLook")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("tendance")}
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 border-2 border-red-500 bg-white/80 backdrop-blur-sm text-red-600 hover:bg-red-50 font-bold shadow-lg"
                >
                  {t("home.hero.ctaTrend")}
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                <div className="backdrop-blur-sm bg-white/70 border border-white/50 rounded-full px-4 py-2 shadow-md">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm sm:text-base text-slate-900">{t("home.hero.rating")}</span>
                    <span className="text-xs sm:text-sm text-slate-600">{t("home.hero.reviews")}</span>
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/70 border border-white/50 rounded-full px-4 py-2 shadow-md">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-green-600">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{t("home.hero.inStock")}</span>
                  </div>
                </div>
                <div className="backdrop-blur-sm bg-white/70 border border-white/50 rounded-full px-4 py-2 shadow-md">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600">
                    <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{t("home.hero.freeShipping")}</span>
                    <span className="text-[10px] text-slate-500">{t("home.hero.freeShippingNote")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-3xl border border-white shadow-2xl" />
                <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/lunette.jpg"
                      alt={t("home.hero.altImage")}
                      width={600}
                      height={600}
                      className="relative object-contain w-full h-full max-w-full z-10"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
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
              {t("home.trend.badge")}
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {t("home.trend.title")}
            </h3>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              <span className="font-semibold italic text-slate-900">{t("home.trend.intro").split(". ")[0]}.</span> {t("home.trend.intro").split(". ").slice(1).join(". ").replace(/\s*$/, "")}
              <span className="block mt-2 text-base italic text-slate-600">{t("home.trend.introFootnote")}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <Card className="border border-red-100 bg-white hover:border-red-200 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">🔥</div>
                  <CardTitle className="text-xl text-slate-900">{t("home.trend.cards.trendTitle")}</CardTitle>
                  <CardDescription className="text-base">
                    {t("home.trend.cards.trendDesc")}
                    <span className="text-sm italic text-slate-500 block mt-1">{t("home.trend.cards.trendNote")}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-blue-100 bg-white hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-2">💪</div>
                  <CardTitle className="text-xl text-slate-900">{t("home.trend.cards.attitudeTitle")}</CardTitle>
                  <CardDescription className="text-base">
                    {t("home.trend.cards.attitudeDesc")}
                    <span className="text-sm italic text-slate-500 block mt-1">{t("home.trend.cards.attitudeNote")}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-red-100 bg-white hover:border-red-200 transition-colors sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="text-4xl mb-2">⭐</div>
                  <CardTitle className="text-xl text-slate-900">{t("home.trend.cards.premiumTitle")}</CardTitle>
                  <CardDescription className="text-base">
                    {t("home.trend.cards.premiumDesc")}
                    <span className="text-sm italic text-slate-500 block mt-1">{t("home.trend.cards.premiumNote")}</span>
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
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900">{t("home.features.title")}</h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              <span className="font-semibold italic text-slate-900">{t("home.features.intro").split(". ")[0]}.</span> {t("home.features.intro").split(". ").slice(1).join(". ").replace(/\s*$/, "")}
              <span className="block mt-2 text-sm italic text-slate-500">{t("home.features.introFootnote")}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-blue-200">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{t("home.features.uvTitle")}</CardTitle>
                <CardDescription className="text-base">
                  {t("home.features.uvDesc")}
                  <span className="text-sm italic text-slate-500 block mt-1">{t("home.features.uvNote")}</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-blue-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-blue-200">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{t("home.features.qualityTitle")}</CardTitle>
                <CardDescription className="text-base">
                  {t("home.features.qualityDesc")}
                  <span className="text-sm italic text-slate-500 block mt-1">{t("home.features.qualityNote")}</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-red-100 shadow-lg hover:shadow-xl transition-shadow bg-white hover:border-red-200 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{t("home.features.franceTitle")}</CardTitle>
                <CardDescription className="text-base">
                  {t("home.features.franceDesc")}
                  <span className="text-sm italic text-slate-500 block mt-1">{t("home.features.franceNote")}</span>
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
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900">{t("home.product.title")}</h3>
            <p className="text-base sm:text-lg text-slate-600">{t("home.product.subtitle")}</p>
            <p className="text-sm italic text-slate-500 mt-2">{t("home.product.subtitleNote")}</p>
          </div>
          <Card className="shadow-2xl border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-black text-slate-900">{t("home.product.cardTitle")}</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                {t("home.product.cardDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">{t("home.product.characteristics")}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t("home.product.charList.shape")}</li>
                    <li>• {t("home.product.charList.lenses")}</li>
                    <li>• {t("home.product.charList.frame")}</li>
                    <li>• {t("home.product.charList.protection")}</li>
                    <li>• {t("home.product.charList.temples")}</li>
                    <li>• {t("home.product.charList.origin")}</li>
                    <li className="text-xs italic text-slate-500">{t("home.product.charList.elysee")}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t("home.product.specs")}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t("home.product.specList.ce")}</li>
                    <li>• {t("home.product.specList.nose")}</li>
                    <li>• {t("home.product.specList.ear")}</li>
                    <li>• {t("home.product.specList.design")}</li>
                    <li>• {t("home.product.specList.quality")}</li>
                    <li>• {t("home.product.specList.warranty")}</li>
                    <li className="text-xs italic text-slate-500">• {t("home.product.specList.resists")}</li>
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
                <CardTitle className="text-3xl sm:text-4xl font-black mb-2 text-white">{t("home.order.title")}</CardTitle>
                <CardDescription className="text-lg sm:text-xl text-slate-300">
                  {t("home.order.price")} <span className="text-3xl sm:text-4xl font-black text-blue-400">{t("home.hero.price")}</span>
                </CardDescription>
                <p className="text-sm text-slate-400 mt-2 italic">{t("home.order.tagline")}</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{t("home.order.styleLine")}</p>
                <p className="text-xs text-slate-500 mt-2 italic">{t("home.order.guarantee")}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <span className="font-semibold text-white">{t("home.order.product")}</span>
                    <span className="font-bold text-white">{t("home.hero.subtitle")}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <span className="font-semibold text-white">{t("home.order.shipping")}</span>
                    <span className="text-green-400 font-bold">{t("home.order.free")}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                    <span className="font-black text-lg sm:text-xl text-white">{t("home.order.total")}</span>
                    <span className="text-3xl sm:text-4xl font-black text-blue-400">{t("home.hero.price")}</span>
                  </div>
                </div>
                <Button size="lg" className="w-full text-base sm:text-lg py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl" asChild>
                  <Link href="/checkout">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    {t("home.hero.ctaLook")}
                  </Link>
                </Button>
                <p className="text-xs sm:text-sm text-center text-slate-400">
                  {t("home.order.trust")}
                </p>
                <p className="text-xs text-center text-slate-500 mt-2 italic">
                  {t("home.order.trustNote")}
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
            <p className="font-black text-lg text-slate-900">{t("common.brand")}</p>
            <p className="text-sm text-slate-600 italic">{t("home.footer.tagline")}</p>
            <p className="text-xs text-slate-500 mt-2 font-medium">{t("home.footer.styleLine")}</p>
            <p className="text-xs text-slate-500 mt-4">{t("home.footer.rights")}</p>
            <p className="text-xs text-slate-400 mt-2 italic">{t("home.footer.disclaimer")}</p>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-100">
            <p className="text-xs text-slate-500">
              {t("home.footer.dev")}{" "}
              <Link
                href="https://www.flmtech.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t("home.footer.flmtech")}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
