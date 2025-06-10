'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProjectCard from '/components/ProjectCard';

const projectData = [
  {
    image: '/website1.png',
    category: 'HTML Css',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Panacloud website",
    link: '/',
    github: "/",
  },
  {
    image: '/my-portfolio1.png',
    category: 'Html Css',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Portfolio",
    link: '/',
    github: "/",
  },

  {
    image: '/login-signup1.png',
    category: 'Html Css js',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto quis culpa repellat. Ipsam, voluptas?",
    name: "Sign-up Login website",
    link: '/',
    github: "/",
  },


];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi nobis quas nemo, eum nam!</p>
          <Link href='/projects'><Button>All Projects</Button></Link>
        </div>

        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px] "  data-slides-preview={3} breakpoints={{
            640:{
                slidesPreView:2
            }
          }}  spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            
            {projectData.slice(0,4).map((project, index) => {
                return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work;
