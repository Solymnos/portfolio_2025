import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';

let Competences = () =>
{

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 1 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
      };

      const responsiveRevert = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: -1 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
      };

    return (
        <div className='flex flex-col h-screen w-full p-16'>
            <div className='flex h-1/3 w-full'>
                <Carousel
                    className='h-full w-full'
                    responsive={responsive}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    removeArrowOnDeviceType={["tablet" , "desktop" , "mobile"]} >
                    <CarouselItem logo='/img/CLogo.png' text='C'/>
                    <CarouselItem logo='/img/C++Logo.png' text='C++'/>
                    <CarouselItem logo='/img/JSLogo.png' text='JavaScript'/>
                    <CarouselItem logo='/img/TSLogo.png' text='TypeScript'/>
                    <CarouselItem logo='/img/PythonLogo.png' text='Python'/>
                    <CarouselItem logo='/img/JavaLogo.png' text='Java'/>
                    <CarouselItem logo='/img/HTMLLogo.png' text='HTML'/>
                    <CarouselItem logo='/img/CSSLogo.png' text='CSS'/>
                    <CarouselItem logo='/img/KotlinLogo.png' text='Kotlin'/>
                    <CarouselItem logo='/img/GoLogo.png' text='Go'/>
                </Carousel>
            </div>
            <div className='flex h-1/3 w-full '>
                <Carousel
                    className='h-full w-full'
                    responsive={responsiveRevert}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    removeArrowOnDeviceType={["tablet" , "desktop" , "mobile"]} >
                    <CarouselItem logo='/img/ReactLogo.png' text='React/Native'/>
                    <CarouselItem logo='/img/VueLogo.png' text='Vue'/>
                    <CarouselItem logo='/img/AngularLogo.png' text='Angular'/>
                    <CarouselItem logo='/img/NodeLogo.png' text='Node'/>
                    <CarouselItem logo='/img/FastAPILogo.png' text='FastAPI'/>
                    <CarouselItem logo='/img/SvelteLogo.png' text='Svelte'/>
                    <CarouselItem logo='/img/WindowsLogo.png' text='Windows'/>
                    <CarouselItem logo='/img/LinuxLogo.png' text='Linux'/>
                    <CarouselItem logo='/img/AndroidLogo.png' text='Android'/>
                </Carousel>
            </div>
            <div className='flex h-1/3 w-full'>
                <Carousel
                    className='h-full w-full'
                    responsive={responsive}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    removeArrowOnDeviceType={["tablet" , "desktop" , "mobile"]} >
                    <CarouselItem logo='/img/GitLogo.png' text='Git'/>
                    <CarouselItem logo='/img/SQLLogo.png' text='SQL'/>
                    <CarouselItem logo='/img/MongoDBLogo.png' text='MongoDB'/>
                    <CarouselItem logo='/img/DockerLogo.png' text='Docker'/>
                    <CarouselItem logo='/img/ShadcnUILogo.png' text='ShadcnUI'/>
                    <CarouselItem logo='/img/TailwindLogo.png' text='Tailwind'/>
                    <CarouselItem logo='/img/SCLogo.png' text='Styled Components'/>
                    <CarouselItem logo='/img/JiraLogo.png' text='Jira'/>
                    <CarouselItem logo='/img/PostmanLogo.png' text='Postman'/>
                    <CarouselItem logo='/img/KubernetesLogo.png' text='Kubernetes'/>
                </Carousel>
            </div>
        </div>
    )
}

export default Competences;