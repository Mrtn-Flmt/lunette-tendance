"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Check, Smile, X } from "lucide-react";
import Link from "next/link";
import { createOrder } from "@/lib/api";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showJokeModal, setShowJokeModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler un petit délai pour l'effet
    setTimeout(() => {
      setIsSubmitting(false);
      setShowJokeModal(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Check className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-black text-slate-900">Commande confirmée !</CardTitle>
            <CardDescription className="text-base mt-2">
              🎉 Votre look dur à cuire est en route ! Vous recevrez un email de confirmation sous peu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" asChild>
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      {/* Modale blague */}
      {showJokeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="max-w-md w-full shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50 animate-in fade-in zoom-in duration-300">
            <CardHeader className="text-center relative">
              <button
                onClick={() => setShowJokeModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smile className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-black text-slate-900 mb-2">
                😄 C'était une blague !
              </CardTitle>
              <CardDescription className="text-base mt-2 space-y-2">
                <p className="text-slate-700">
                  Désolé de vous décevoir, mais ces lunettes ne sont pas vraiment en vente...
                  <span className="font-semibold italic"> pour le moment !</span>
                </p>
                <p className="text-slate-600 mt-3">
                  Mais vous avez quand même réussi à "faire le job" en remplissant tout le formulaire ! 👏
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-700 text-center">
                  <span className="font-semibold">Merci d'avoir joué le jeu !</span> 🎭
                </p>
                <p className="text-xs text-slate-600 text-center mt-2">
                  Partagez cette page avec vos amis pour leur faire la même blague !
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowJokeModal(false)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Je rigole aussi ! 😂
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowJokeModal(false);
                    window.location.href = "/";
                  }}
                  className="flex-1"
                >
                  Retour à l'accueil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <header className="border-b-2 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Message important */}
            <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-red-50 border-2 border-blue-200 rounded-lg shadow-lg">
              <p className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-2">
                🔒 Aucune information ne sera envoyée
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-black mb-2 text-slate-900">Finaliser votre commande</h1>
              <p className="text-lg text-muted-foreground">Quelques informations pour recevoir votre look dur à cuire</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="shadow-xl border-2 border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Informations de livraison</CardTitle>
                    <CardDescription className="text-base">
                      Remplissez vos informations pour recevoir votre Pacific S01
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse *</Label>
                        <Input
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Code postal *</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            required
                            value={formData.postalCode}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">Ville *</Label>
                          <Input
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Pays *</Label>
                        <Input
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg py-6 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 font-bold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Traitement en cours..."
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-5 w-5" />
                            Confirmer et payer
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="shadow-xl border-2 border-slate-200 sticky top-24 bg-gradient-to-br from-slate-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-semibold text-slate-700">Pacific S01</span>
                        <span className="font-bold text-slate-900">29€</span>
                      </div>
                      <div className="flex justify-between p-3 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-600">Livraison</span>
                        <span className="text-green-600 font-bold">Gratuite</span>
                      </div>
                      <div className="flex justify-between p-3 bg-white rounded-lg border border-blue-200 bg-blue-50/50">
                        <span className="text-slate-600">Réduction spéciale</span>
                        <span className="text-red-600 font-bold">-29€</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between p-4 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg text-white">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-black">0€</span>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border border-blue-200">
                      <p className="text-sm font-semibold text-slate-900 mb-2 text-center">
                        💳 Finalisez votre paiement
                      </p>
                      <p className="text-xs text-slate-600 text-center mb-3">
                        Cliquez sur le lien ci-dessous pour compléter votre commande
                      </p>
                      <Button
                        onClick={() => setShowJokeModal(true)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Payer maintenant
                      </Button>
                      <p className="text-xs text-slate-500 text-center mt-2 italic">
                        *Paiement sécurisé via PayPal
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
