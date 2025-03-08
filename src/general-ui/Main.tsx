import './css/Main.css'
import TextPressure from '../TextAnimations/TextPressure/TextPressure';
import InfiniteMenu from '../Components/InfiniteMenu/InfiniteMenu';
import CountUp from '../TextAnimations/CountUp/CountUp';
import Magnet from '../Animations/Magnet/Magnet';
import TiltedCard from '../Components/TiltedCard/TiltedCard';
import Header from './components/organisms/Header';
function Main() {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Ana Madrigal',
      description: 'Ana es una amante de la fotografía y le encanta capturar momentos únicos.'
    },
    {
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwZXNwYSVDMyVCMW9sfGVufDB8fDB8fHww',
      link: 'https://google.com/',
      title: 'Jorge Perez',
      description: 'Jorge es un aventurero que disfruta explorar nuevos lugares y culturas.'
    },
    {
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://google.com/',
      title: 'Jesus Castillo',
      description: 'Jesús es un chef apasionado que ama experimentar con sabores y recetas.'
    },
    {
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://google.com/',
      title: 'David Reynold',
      description: 'David es un músico talentoso que se dedica a componer y tocar guitarra.'
    }
  ];

    return (
      <>
        <main className="hero mt-2">
          <Header></Header>
        <section className="w-[60%] h-[30%] flex flex-col items-center justify-center ">
    
     
<div className='w-[100%] h-[200px] flex gap-8 flex-col  mb-7  p-10'>
  <div className=' mb-7'>
 
  </div>
<div className='h-[200px]'>
<TextPressure
    text="Spontaneity - Conecta    al     Instante"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={40}
  />
</div>
</div>
<div className='mt-10'>
<div className=' bg-[#1abf01be] m-7 flex gap-3'>
<h2 className=' text-5xl mb-9 '>Miles de personas utilizan ya Spontainety</h2>
</div>
 <div className='h-[100px]'>
 <CountUp
  from={400}
  to={10000}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-5xl font-bold text-white"
/>
 </div>
<div className='h-[100px] flex'>
<Magnet padding={50} disabled={false} magnetStrength={50}>
  <p className='text-5xl'>Empieza a comabatir tu soledad! </p>
</Magnet>

</div>
<div className='h-[400px] flex-row flex '>

<TiltedCard
  imageSrc="https://images.unsplash.com/photo-1511018587878-f734c3819cfc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
<TiltedCard
  imageSrc="https://images.unsplash.com/photo-1536013009411-25930e88d3c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
</div>
</div>
</section>
        <section className="w-[100%] h-[70%] flex flex-col mt-28">


  <InfiniteMenu items={items}/>


        </section>
        </main>
      </>
    )
  }
  
  export default Main
  