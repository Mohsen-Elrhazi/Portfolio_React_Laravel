"use client"

import { useState, useEffect } from "react"

export function PortfolioHero() {
  // Données statiques (vous pouvez les modifier directement ici)
  const name = "John Doe"
  const titles = ["Développeur Web", "Designer UI/UX", "Freelancer", "Photographe"]
  const imageUrl = "/placeholder.jpg" // Placez votre image dans le dossier public

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Effet d'animation pour le texte qui change
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    const typingSpeed = 100
    const delayBetweenTitles = 2000

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Ajouter une lettre
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1))

          // Si on a fini d'écrire le titre
          if (displayedText.length === currentTitle.length) {
            // Attendre avant de commencer à effacer
            setTimeout(() => setIsDeleting(true), delayBetweenTitles)
          }
        } else {
          // Effacer une lettre
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1))

          // Si on a tout effacé
          if (displayedText.length === 0) {
            setIsDeleting(false)
            // Passer au titre suivant
            setCurrentTitleIndex((currentTitleIndex + 1) % titles.length)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentTitleIndex, displayedText, isDeleting, titles])

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Section texte */}
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-4xl font-bold md:text-6xl">{name}</h1>
            <div className="h-16">
              <div className="flex items-center text-2xl font-light md:text-3xl">
                <span className="mr-2">Je suis</span>
                <span className="font-medium text-emerald-400">{displayedText}</span>
                <span className="ml-1 animate-blink">|</span>
              </div>
            </div>
            <p className="max-w-md text-lg text-slate-300">
              Bienvenue sur mon portfolio. Je crée des expériences numériques exceptionnelles avec passion et
              créativité.
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-emerald-500 px-6 py-3 font-medium transition-colors hover:bg-emerald-600">
                Voir mes projets
              </button>
              <button className="rounded-full border border-white px-6 py-3 font-medium transition-colors hover:bg-white/10">
                Me contacter
              </button>
            </div>
          </div>

          {/* Section image */}
          <div className="relative md:w-1/2">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-emerald-400 shadow-xl md:h-96 md:w-96">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={`Photo de ${name}`}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-emerald-500"></div>
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-purple-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
