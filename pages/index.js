import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TbResize } from 'react-icons/tb';
import { useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [lengtho, setlengtho] = useState("");
  const [widtho, setwidtho] = useState("");
  const [lengthc, setlengthc] = useState("");
  const [widthc, setwidthc] = useState("");
  const [arrother, setarrother] = useState({show:false})

  const calculate =(e)=>{
    e.preventDefault()
    var L=parseInt(lengtho);
    var B=parseInt(widtho);
    
    var l=parseInt(lengthc);
    var b=parseInt(widthc);
    
    if(Number.isInteger(L) && Number.isInteger(B) && Number.isInteger(l) && Number.isInteger(b)){
      /////////////////////////////////////////Horizontal///////////////////////////////////////////////
      if (L<=B){
        var change=L;
        L=B;
        B=change
        //console.log(L,B)
      }

      if (l<=b){
        var change1=l;
        l=b;
        b=change1;
        //console.log(l,b)
      }

      if (l <= L && b <= B){
        var columnsl=Math.floor(B/b);
        var rowsl=Math.floor(L/l);
        var horizontall=rowsl * columnsl;
        var lenght_used_Ll = rowsl * l;
        var lenght_used_Bl = columnsl * b;
        var lenght_screap_Ll = L - lenght_used_Ll; 
        var lenght_screap_Bl = B - lenght_used_Bl;
        var zl = 0;
        var screpc_columnsl=0;
        var screpc_rowsl=0;
        //var remainingl=0;

        var entire_row_widthl_screp=0
        var entire_row_heightl_screp=0
        var single_col_widthl_screp=0
        var single_col_heightl_screp=0
          if (b <= lenght_screap_Ll && l <= B)
          {
              //z = B / l;
              screpc_rowsl=Math.floor((L-lenght_used_Ll)/b)
              lenght_used_Ll=lenght_used_Ll+(screpc_rowsl*b)
              lenght_screap_Ll=lenght_screap_Ll-(screpc_rowsl*b)
              screpc_columnsl =(Math.floor(B / l));
              zl=screpc_rowsl*(Math.floor(B / l));
              
              entire_row_widthl_screp=((screpc_columnsl*l)/B)*100 + "%"
              entire_row_heightl_screp=(b/L)*100 + "%"
              single_col_widthl_screp=(1/screpc_columnsl)*100 + "%"
              single_col_heightl_screp=(b/L)*100 + "%"

              //console.log("dfdsfdssdf " + remainingl)
          }
        horizontall = horizontall + zl;
        var entire_row_widthl=((lenght_used_Bl)/B)*100 + "%"
        var entire_row_heightl=(l/L)*100 + "%"
        var single_col_widthl=((1)/columnsl)*100 + "%"
        var single_col_heightl=(l/L)*100 + "%"
        //console.log(columnsl,rowsl)
      }

      /////////////////////////////////////////Vertical///////////////////////////////////////////////
      if (l <= B && b <= L){
        var columnsw = Math.floor(L / b);
        var rowsw = Math.floor(B / l);
        var verticalw = rowsw * columnsw;
        var lenght_used_Lw = rowsw * l
        var lenght_used_Bw = columnsw * b;
        var lenght_screap_Lw = B - lenght_used_Lw;
        var lenght_screap_Bw = L - lenght_used_Bw;
        var zw = 0;
        var screpc_columnsw=0;
        var screpc_rowsw=0;
        var position=0;
        var positionwidth=0;

        var entire_row_widthw_screp=0
        var entire_row_heightw_screp=0
        var single_col_widthw_screp=0
        var single_col_heightw_screp=0
          if (b <= lenght_screap_Lw && l <= L)
          {
              screpc_rowsw=Math.floor((B-lenght_used_Lw)/b)
              lenght_used_Lw=lenght_used_Lw + (screpc_rowsw*b)
              lenght_screap_Lw=lenght_screap_Lw-(screpc_rowsw*b)
              screpc_columnsw =Math.floor(L / l);
              zw = screpc_rowsw*(Math.floor(L / l));
              positionwidth=((screpc_rowsw*b)/B)*100 + "%"

              entire_row_widthw_screp=(screpc_rowsw/B)*100 + "%"
              entire_row_heightw_screp=((l*screpc_columnsw)/L)*100 + "%"
              single_col_widthw_screp=(100/screpc_rowsw) + "%"
              single_col_heightw_screp=(1/screpc_columnsw)*100 + "%"

              position=((B-lenght_used_Lw)/B)*100 + "%"

            console.log(single_col_heightw_screp)
          }
        verticalw = verticalw + zw;
        var entire_row_width=((rowsw*l)/B)*100 + "%"
        var entire_row_height=(b/L)*100 + "%"
        var single_col_width=((1)/rowsw)*100 + "%"
        var single_col_height=(b/L)*100 + "%"
        //console.log(entire_row_width,entire_row_height,single_col_width,single_col_height)
      }
      
      setarrother({show:true,L,B,l,b,columnsl,rowsl,horizontall,lenght_used_Ll,lenght_screap_Ll,zl,lenght_screap_Bl,lenght_used_Bl,columnsw,rowsw,verticalw,lenght_used_Lw,lenght_used_Bw,lenght_screap_Lw,lenght_screap_Bw,zw,entire_row_width,entire_row_height,single_col_width,single_col_height,entire_row_widthl,entire_row_heightl,single_col_widthl,single_col_heightl,entire_row_widthl_screp,entire_row_heightl_screp,single_col_widthl_screp,single_col_heightl_screp,entire_row_widthw_screp,entire_row_heightw_screp,single_col_widthw_screp,single_col_heightw_screp,zw,screpc_rowsl,screpc_columnsl,position,screpc_rowsw,screpc_columnsw,positionwidth})

    }else{
      setarrother(false);
      toast.error('Invalid Input Value Please Check and Update', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleChange=(e)=>{
    if(e.target.name==='mainl'){setlengtho(e.target.value)}
    if(e.target.name==='mainw'){setwidtho(e.target.value)}
    if(e.target.name==='extractl'){setlengthc(e.target.value)}
    if(e.target.name==='extractw'){setwidthc(e.target.value)}
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Resizer | size extractor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>

      <header className="text-gray-600 body-font one-edge-shadow">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <TbResize className='text-3xl'/>
            <span className="ml-3 text-3xl">Resize</span>
          </a>
          {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav> */}
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
      
      <div>
        <form onSubmit={calculate}>
        <div className="container pt-6 mx-auto">
          <div className="bg-white rounded-lg p-8 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md shd">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Main board size : </h2>
            <div className='flex flex-col border-b-2 pb-4'>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Length / लंबाई</label>
                <input onChange={handleChange} value={lengtho} type="text" id="mainl" name="mainl" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Width / चौड़ाई</label>
                <input onChange={handleChange} value={widtho} type="text" id="mainw" name="mainw" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font mt-4">Extracted board size : </h2>
            <div className='flex flex-col'>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Length / लंबाई</label>
                <input onChange={handleChange} value={lengthc} type="text" id="extractl" name="extractl" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Width / चौड़ाई</label>
                <input onChange={handleChange} value={widthc} type="text" id="extractw" name="extractw" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Calculate</button> 
          </div>
        </div>
        </form>
      </div>
      {/* /////////////////////////////////////////Vertical/////////////////////////////////////////////// */}
      {arrother.show && <div className={`flex flex-wrap -m-4 mt-8 container bg-white rounded-lg p-8 md:ml-auto w-full z-10 shadow-md shd my-6 mx-auto ${arrother.verticalw>arrother.horizontall?"bg-green-200":""}`}>
          <div className="md:w-2/5">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Vertical Cutting : </h2>
            <p>Main Board Length : {arrother.L}</p>
            <p>Main Board Bridth : {arrother.B}</p>
            <p>Cuting Board Length : {arrother.l}</p>
            <p>Cuting Board Bridth : {arrother.b}</p>
            <p>cuting pics inside the Length : {arrother.rowsw}</p>
            <p>cuting pics inside the Bridth : {arrother.columnsw}</p>
            <p>Total Pics : {arrother.verticalw} </p>
            <p>Bridth used : {arrother.lenght_used_Lw}</p>
            <p>Lenght used : {arrother.lenght_used_Bw}</p>
            <p>Remaining length : {arrother.lenght_screap_Bw}</p>
            <p>Remaining bridth : {arrother.lenght_screap_Lw}</p>
            <p>Pics from escrape : {arrother.zw}</p>
          </div>
          <div className="py-10 md:w-3/5 sm:w-full">
            
            {arrother.columnsw>0 && <div className='bg-slate-300 border-2 border-slate-400 relative layout-div'>
              <span style={{position:"absolute", right:"-35px",top:"49%", transform: "rotate(90deg)"}} className="text-xl">{arrother.L}</span>
              <span style={{position:"absolute", left:"49%", top:"-35px"}} className="text-xl">{arrother.B}</span>
              {arrother.rowsw>0 && arrother.columnsw>=1 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height, float:"left"}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=2 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=3 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=4 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=5 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=6 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=7 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=8 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=9 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=10 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=11 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=12 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=13 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=14 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=15 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=16 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=17 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=18 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=19 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=20 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {/* // */}
              <div className='bg-white absolute top-0' style={{width:arrother.positionwidth, height:arrother.entire_row_heightw_screp,right:arrother.position}}>
                  {arrother.screpc_rowsw>=1 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=2 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=3 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=4 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=5 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=6 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=7 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=8 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=9 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
                  {arrother.screpc_rowsw>=10 && <div style={{width:arrother.single_col_widthw_screp, height:"100%", right:arrother.position, float:"left"}}>
                      {arrother.screpc_columnsw>=1 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=2 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=3 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=4 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=5 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=6 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=7 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=8 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=9 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                      {arrother.screpc_columnsw>=10 && <div className='bg-white box-shadow relative' style={{width:"100%", height:arrother.single_col_heightw_screp}}>
                        <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                        <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                      </div>}
                  </div>}
              </div>
              
              {/* // */}
            </div>}
          </div>
          {/* <div className="p-4 md:w-2/5">
            <div className='bg-slate-100 w-full'>gfgggd</div>
          </div> */}
      </div>}
{/* /////////////////////////////////////////Horizontal/////////////////////////////////////////////// */}
      {arrother.show && <div className={`flex flex-wrap -m-4 mt-8 container bg-white rounded-lg p-8 md:ml-auto w-full z-10 shadow-md shd my-6 mx-auto ${arrother.horizontall>arrother.verticalw?"bg-green-200":""}`}>
          <div className="md:w-2/5">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Horizontal Cutting : </h2>
            <p>Main Board Length : {arrother.L}</p>
            <p>Main Board Bridth : {arrother.B}</p>
            <p>Cuting Board Length : {arrother.l}</p>
            <p>Cuting Board Bridth : {arrother.b}</p>
            <p>cuting pics inside the Length : {arrother.rowsl}</p>
            <p>cuting pics inside the Bridth : {arrother.columnsl}</p>
            <p>Total Pics : {arrother.horizontall} </p>
            <p>Lenght_used : {arrother.lenght_used_Ll}</p>
            <p>Bridth_used : {arrother.lenght_used_Bl}</p>
            <p>Remaining length : {arrother.lenght_screap_Ll}</p>
            <p>Remaining bridth : {arrother.lenght_screap_Bl}</p>
            <p>Pics from escrape : {arrother.zl}</p>
          </div>
          <div className="py-10 md:w-3/5">
            {arrother.rowsl>0 && <div className='bg-slate-300 border-2 border-slate-400 layout-div relative'>
                <span style={{position:"absolute", right:"-35px",top:"49%", transform: "rotate(90deg)"}} className="text-xl">{arrother.L}</span>
                <span style={{position:"absolute", left:"49%", top:"-35px"}} className="text-xl">{arrother.B}</span>
                {arrother.rowsl>0 && arrother.rowsl>=1 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                    {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=2 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=3 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=4 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=5 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=6 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=7 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=8 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=9 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=10 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                    {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=11 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                    {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=11 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=12 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=13 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=14 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=15 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=16 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=17 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=18 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=19 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=20 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {/* entire_row_widthl_screp,entire_row_heightl_screp,single_col_widthl_screp,single_col_heightl_screp */}
                {/*screpc_rowsl,screpc_columnsl {console.log(arrother.entire_row_widthl_screp,arrother.entire_row_heightl_screp)} */}
                {arrother.screpc_rowsl>=1 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=2 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=3 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=4 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=5 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=6 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=7 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=8 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=9 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
                {arrother.screpc_rowsl>=10 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.screpc_columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.screpc_columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px", top:"49%", transform: "rotate(90deg)"}}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
            </div>}
          </div>
          {/* <div className="p-4 md:w-2/5">
            <Image src="/img.png" alt="Picture of the author" width={500} height={500}/>
          </div> */}
      </div>}
      
      <footer className={styles.footer}>  
          <p>Design & Devloped by&nbsp;<span className={styles.footer_font}>Gaurav Bhati</span></p>  
      </footer>
    </div>
  )
}
