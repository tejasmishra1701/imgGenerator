import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'
const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {}
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }
  const generateImage = () => {}
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
      <h1 className='font-extrabold text-[#222328] text-[32px]'>Create Images</h1>
      <p className='mt-2 text-[#666e75] text-[16px]'>Create stunning images with our AI-powered image generation tool</p>
      </div>

      <div>
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
        <FormField
        labelName ="Your Name"
        type="text"
        name="name"
        placeholder="Harley Quinn"
        value={form.name}
        handleChange={handleChange}
        /> 
        <FormField
        labelName ="Prompt"
        type="text"
        name="Prompt"
        placeholder="A maltipoo puppy sitting on a park bench"
        value={form.prompt}
        handleChange={handleChange}
        isSurpriseMe 
        handleSurpriseMe = {handleSurpriseMe}
        /> 
        <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
          {form.photo ? (
            <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
          ) : (
            <img src={preview} alt='preview' className='w-full h-full object-contain' opacity-40/>
          )}
          {generatingImg && (
            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
              <Loader />
            </div>
          )}
        </div>       
        </div>
        <div className='mt-5 flex gap-5'>
          <button
          type ="button"
          onClick={generateImage}
          className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-full px-5 py-2.5 text-center hover:cursor-pointer'>
          {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className='mt-10'>
          <p className='text-gray-600'>Share your created image with the community</p>
          <button
          type='submit'
          className='text-white bg-blue-700 font-medium rounded-md text-sm w-full sm:w-full px-5 py-2.5 text-center hover: cursor-pointer'>
          Share Image
          {loading && <Loader />}
          </button>
        </div>
        </form>
      </div>
    </section>
  )
}

export default CreatePost