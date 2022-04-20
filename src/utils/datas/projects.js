import kasa from "../../assets/projects/kasa.png"
import fisheye from "../../assets/projects/eyefish.png"
import ohmyfood from "../../assets/projects/ohmyfood.jpg"
import hrnet from "../../assets/projects/hrnet.png" 
import argentBank from "../../assets/projects/argent_bank.png"

export const projectPararaphe = "L'intégralité de mes projets est disponible sur mon github @louannem."

export const projectObj = [
    {
        title: "Ohmyfood",
        tech: ["HTML / CSS / SASS"],
        description: "Une application pour mobile développement avec SASS. Inclu des animations en CSS/SASS ainsi qu'une page de chargement.",
        img: ohmyfood,
        codeURL: "https://github.com/louannem/LouanneMartins_3_10062021",
        projectURL: "https://louannem.github.io/LouanneMartins_3_10062021/"
    },
    {
        title: "Fisheye",
        tech: ["HTML / CSS / JavaScript / Accessibilité"],
        description: "Une site web pour afficher les galleries de photographes professionnels. Développé par module et accessible. Navigation avec clavier et lecteur d'écran disponible",
        img: fisheye,
        codeURL: "https://github.com/louannem/LouanneMartins_6_20072021",
        projectURL: "https://louannem.github.io/LouanneMartins_6_20072021/src/index.html"
    },
    {
        title: "Kasa",
        tech: ["React / React Router"],
        description: "Intégration d'une maquette avec React et ajout d'un router. Affichage des logements sur des pages individuelles et implémentation de leurs données dans leurs composants.",
        img: kasa,
        codeURL: "https://github.com/louannem/LouanneMartins_11_28122021"
    },
    {
        title: "Argent Bank",
        tech: ["React / React Router / Redux"],
        description: "Application bancaire développée avec React. Gestion d'état faite avec Redux pour système de login avec sécurisation par token, et système d'édition du profil de l'utilisateur.",
        img: argentBank,
        codeURL: "https://github.com/louannem/LouAnne_Martins_13_08022022"
    },
    {
        title: "HRnet",
        tech: ["React / React Router / Redux"],
        description: "Refactorisation d'une application utilisant jQuery en une application React. Intégration d'un plugin datepicker créé par mes soins, converti en React depuis jQuery.",
        img: hrnet,
        codeURL: "https://github.com/louannem/LouanneMartins_14_15032022",
    },
]