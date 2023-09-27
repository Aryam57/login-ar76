import Image from 'next/image'


export default function Home() {
  return (
    <main className="p-4">
      <h1>welcome to book library</h1>
      <div className="flex">
  <div className="w-1/2 mr-4">
    <div className="border border-gray-300 p-4">
      <h2> by George Orwell:</h2>
      <p>Description: This book is one of the most famous literary works of the 20th century. <br/>It presents a dark vision of the future where the state controls every aspect of life<br/> and exercises surveillance and manipulation over individuals.</p>
    </div>
  </div>
  <div className="w-1/2 ml-4">
    <div className="border border-gray-300 p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
      <h2>Fahrenheit  by Ray Bradbury</h2>
      <p>Description: The book depicts a future society where books are burned as <br/>crimes and individuals are silenced from independent thought and free thinking.<br/> It emphasizes the power of culture and knowledge in the face of repression.</p>
    </div>
  </div>
  <div className="w-1/2 ml-4">
    <div className="border border-gray-300 p-4">
      <h2>Jane Eyre by Charlotte Brontë</h2>
      <p>Description: This classic novel tells the story of the orphaned girl Jane <br/>Eyre, who faces various challenges in her life. The book addresses themes such as <br/>social justice, personal strength, and love.</p>
    </div>
  </div>

  <div class="w-1/2 ml-4">
    <div className="border border-gray-300 p-4">
      <h2>The 7 Habits of Highly Effective People by Stephen Covey</h2>
      <p>Description: This book provides principles for personal development and achieving <br/>success in life. It relies on concepts of core values, personal goals, and priorities <br/>as a means to achieve success and happiness.</p>
    </div>
  </div>
</div>
    </main>
  )
}