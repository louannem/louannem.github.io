import kasa from "../../assets/projects/kasa.png"
import fisheye from "../../assets/projects/eyefish.png"
import ohmyfood from "../../assets/projects/ohmyfood.jpg"
import hrnet from "../../assets/projects/hrnet.png" 
import argentBank from "../../assets/projects/argent_bank.png"
import sportsee from "../../assets/projects/sportsee.png"
import DadouEscape from "../../assets/projects/dadou_escpae.jpg"

export const projectPararaphe = `L'intégralité de mes projets est disponible sur mon github @louannem.`

export const projectObj = [
    {
        title: "Ohmyfood",
        tech: ["HTML / CSS / SASS"],
        description: `Un site web centré mobile développé avec SASS. Inclu des animations en CSS/SASS ainsi qu'une page de chargement.`,
        img: ohmyfood,
        codeURL: "https://github.com/louannem/LouanneMartins_3_10062021",
        projectURL: "https://louannem.github.io/LouanneMartins_3_10062021/"
    },
    {
        title: "Fisheye",
        tech: ["HTML / CSS / JavaScript / Accessibilité"],
        description: "Une site web pour afficher les galleries de photographes professionnels. Développé avec factory design pattern et axé accessibilité. Navigation avec clavier et lecteur d'écran disponible.",
        img: fisheye,
        codeURL: "https://github.com/louannem/LouanneMartins_6_20072021",
        projectURL: "https://louannem.github.io/LouanneMartins_6_20072021/src/index.html"
    },
    {
        title: "Kasa",
        tech: ["React / React Router"],
        description: "Intégration d'une maquette avec React et ajout d'un router. Affichage des logements sur des pages individuelles et implémentation de leurs données dans les composants.",
        img: kasa,
        codeURL: "https://github.com/louannem/LouanneMartins_11_28122021"
    },
    {
        title: "Sportsee",
        tech: ["React / React Router / Recharts"],
        description: "Dashboard d'une application de coaching sportif avec graphiques analytiques. Récupération des données via une API Rest et des données mockées.",
        img: sportsee,
        codeURL: "https://github.com/louannem/LouanneMartins_12_11012022"
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


export const inWorks = [
    {
        title: "Dadou Escape",
        tech: ["HTML / CSS  / Wordpress"],
        description: "Lorem ipsum",
        img: DadouEscape,
    }
]