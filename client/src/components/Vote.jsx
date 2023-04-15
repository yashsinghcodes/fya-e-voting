import {useNavigate} from 'react-router-dom';

export const Vote = () => {
  const handleClick = ()=>{
    const Navigate = useNavigate();
    Navigate("/explore");
  }
  return (
    <div className='text-white w-1/3 relative m-48 z-[2]'>
        <h1 className='text-4xl font-bold my-4'>Make Digital Vote</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis nihil veritatis, maiores numquam vel dolore molestiae ipsam fugit dolor fuga.</p>
        <button  className='relative top-8 py-4 px-10 bg-white text-[#6C63FF] text-lg font-semibold rounded-full'>Vote Now</button>
    </div>
  )
}
