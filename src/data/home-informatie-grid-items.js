import Behandelmethoden from '../icons/behandelmethoden.js'
import Advies from '../icons/advies.js'
import Over from '../icons/over.js'
import Bedrijven from '../icons/bedrijven.js'

const items = [
  { 
    icon: Behandelmethoden, 
    bodyText: "Wil je informatie over acupunctuur, kruidengeneeskunde, T'ai Chi Chuan, Qi Gong of Quantumbiofeedback?",
    buttonText: "Behandelmethoden",
    buttonLink: "/behandelmethoden",
  },
  { 
    icon: Advies, 
    bodyText: "Wil je advies over voeding, levensstijladvies, familieopstellingen, coaching of bioenergetische begeleiding?",
    buttonText: "Coaching en begeleiding",
    buttonLink: "/coachen-en-begeleiding",
  },
  { 
    icon: Over, 
    bodyText: "Wil je weten met welke klachten Zhi Dao jou kan helpen of wat jouw zorgverzekering vergoed?",
    buttonText: "Voor patiënten",
    buttonLink: "/voor-patienten",
  },
  { 
    icon: Bedrijven,
    bodyText: "Is jouw bedrijf op zoek naar een projectleider, coach, adviseur of trainer?",
    buttonText: "Voor bedrijven",
    buttonLink: "/voor-bedrijven",
  },
]

export default items