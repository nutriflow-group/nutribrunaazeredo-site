import { motion } from "framer-motion";
import postOne from "@/assets/instagram-post-1.jpg";
import postTwo from "@/assets/instagram-post-2.jpg";
import postThree from "@/assets/instagram-post-3.jpg";
import postFour from "@/assets/instagram-post-4.jpg";
import postFive from "@/assets/instagram-post-5.jpg";

const posts = [
  { image: postOne, title: "Sono e rotina alimentar", url: "https://www.instagram.com/p/DbUGKO1hVRi/" },
  { image: postTwo, title: "Dieta precisa caber na vida real", url: "https://www.instagram.com/p/DbHOHr7hFGJ/" },
  { image: postThree, title: "Café da manhã favorito", url: "https://www.instagram.com/p/DaVAmvRxQu8/" },
  { image: postFour, title: "O básico que transforma", url: "https://www.instagram.com/p/DZ-QUruRxMj/" },
  { image: postFive, title: "Livre das dietas mirabolantes", url: "https://www.instagram.com/p/DY5sJZyR_O2/" },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="pb-16">
      <div className="container">
        <div className="mb-6">
          <span className="eyebrow mb-3 block">Conteúdo que transforma</span>
          <h2 className="editorial-title max-w-xl text-3xl md:text-4xl">Acompanhe minha rotina no Instagram</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3">
          {posts.map((post, index) => (
            <motion.a
              key={`${post.title}-${index}`}
              href={post.url}
              target={post.url ? "_blank" : undefined}
              rel={post.url ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative h-28 min-w-[190px] overflow-hidden rounded-xl bg-primary text-primary-foreground"
              aria-label={post.url ? `Abrir post no Instagram: ${post.title}` : undefined}
            >
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <h3 className="absolute bottom-3 left-3 right-3 text-sm font-bold leading-tight">{post.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
