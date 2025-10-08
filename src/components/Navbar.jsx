import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div>
      {/* /* Navbar */ }
      <motion.nav 
        className='bg-blue-500 flex py-5 px-10 items-center justify-between font-bold fixed w-full top-0 z-20'>
        <h1 className="text-4xl font-bold text-white">Project</h1>
        <div className='flex gap-8 items-center text-white'>
          <a href="#home" className='text-xl font-semibold'>Home</a>
          <a href="#about" className='text-xl font-semibold'>About</a>
          <a href="#products" className='text-xl font-semibold'>Product</a>
          <a href="#contact" className='text-xl font-semibold'>Contact</a>
        </div>
      </motion.nav>

      {/* /* Section One */ }
      <motion.div
        id="home"
        initial={{opacity:0 ,scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1}}
        className="w-full bg-black h-screen p-40 text-white"
      >
        <h1 className="text-4xl font-bold">Section One</h1>
        <p className="text-lg">Hey! I am the first section</p>
      </motion.div>

      {/* Section Two */}
      <motion.div
        id="about"
        initial={{opacity:0 ,scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:2}}
        className="w-full bg-blue-200 h-screen p-40"
      >
        <h1 className="text-4xl font-bold">Section Two</h1>
        <p className="text-lg">Hey! I am the second section</p>
      </motion.div>

      {/* Section Three */}
      <motion.div 
        id="products"
        initial={{opacity:0 ,scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1}}
        className="w-full bg-green-200 h-screen p-40"
      >
        <h1 className="text-4xl font-bold">Section Three</h1>
        <p className="text-lg">Hey! I am the third section</p>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;


    


    


/*
    <h1 className='text-center text-red-500 text-3xl font-bold  z-10 mt-25 mb-1 '> Rudra Narayan Jena </h1>
        <p className='p-2 m-0'> <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis est magni laboriosam maiores voluptates id rerum tenetur dolore nihil culpa vitae, minima quae cum commodi illum et amet itaque ullam ut saepe! Quod suscipit explicabo necessitatibus in! Ut, nostrum corporis? Asperiores error eos facilis. Quis repellat deleniti in ea rem nesciunt sunt distinctio quibusdam consequatur eum deserunt, animi ipsum eius qui architecto, totam iure expedita reiciendis fugit. Ullam, maxime rerum reiciendis sed delectus alias nulla quae, placeat dicta doloribus distinctio labore molestias hic? Deleniti, voluptatibus laboriosam culpa nam ex minima alias rerum iure sed et odit consectetur doloribus maiores.<br/><br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque, atque quae itaque exercitationem illum tenetur nobis consequuntur excepturi fugit, possimus debitis illo quasi fuga odio neque? Eligendi officiis, velit molestias, iste reprehenderit id tempora aliquid placeat laborum, nostrum earum non cum iure nesciunt qui ipsum! Minus voluptas, omnis, tenetur maxime, magni at provident cum tempora obcaecati magnam officia cupiditate facere exercitationem neque eius. Officiis eum provident quis minus vero id, vitae quasi, doloremque iure incidunt nisi culpa eligendi magni ab consequatur. Aperiam omnis laborum autem beatae esse, ab sequi a itaque officia facere voluptatibus quas perferendis fugit dolor, praesentium nisi cum vero! Doloribus, accusantium recusandae. Recusandae eaque a aliquam aliquid magni alias repellat, fugiat velit autem sint! Ipsam ut ab aliquam nisi necessitatibus culpa dolor, autem, doloremque, blanditiis magni eaque optio at dignissimos nam consequatur vel aspernatur eveniet aut consectetur perspiciatis veniam quos fugit adipisci. Minus possimus quod fugit laudantium sint tempora esse, accusamus dolores itaque corporis facere unde maxime, dolore veritatis id odio ex asperiores enim voluptas aspernatur natus maiores? Sapiente eos libero enim quisquam consectetur itaque sint illo perspiciatis impedit, quos aspernatur, quod repellat inventore cum consequuntur a velit! Facilis dolores tempore porro blanditiis expedita iure ab.<br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod culpa magni eveniet expedita reiciendis nesciunt commodi impedit quis. Esse aliquid labore officia quos accusamus quis a, provident cum, totam culpa et earum, maiores cupiditate? At sequi sapiente esse, adipisci labore libero laudantium reprehenderit voluptas, veniam inventore nemo quas soluta deleniti distinctio magnam facere? Ipsam deleniti hic, accusantium doloremque modi reiciendis sunt ratione aspernatur quia corrupti non asperiores nesciunt quaerat inventore natus nihil quibusdam ea facilis illo voluptatibus? Similique iure, nihil laborum pariatur amet saepe blanditiis hic doloremque itaque aperiam nemo laudantium fuga consequuntur culpa odio voluptatibus? Laudantium expedita, repudiandae veniam voluptate illo excepturi magnam cupiditate sapiente officia similique a! Cupiditate magni perspiciatis cum aspernatur iusto, accusamus et quibusdam voluptatem aliquid! Animi consequuntur aliquid, nobis porro sunt harum excepturi minima autem laudantium corporis sint earum fuga voluptas vero, praesentium veritatis consequatur quo quae. Optio expedita neque dolorem sunt dicta perspiciatis provident natus? Rem deserunt quasi temporibus sequi dolore eum necessitatibus nihil non vitae consequuntur voluptate beatae in quo recusandae impedit tempore eaque iusto architecto culpa, quibusdam consectetur adipisci? Dolor veniam labore veritatis beatae deleniti culpa, modi facilis dolorem quaerat fugit, voluptatibus quae ullam explicabo molestiae rerum? Quod repellat sit obcaecati facere.
        <br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis est magni laboriosam maiores voluptates id rerum tenetur dolore nihil culpa vitae, minima quae cum commodi illum et amet itaque ullam ut saepe! Quod suscipit explicabo necessitatibus in! Ut, nostrum corporis? Asperiores error eos facilis. Quis repellat deleniti in ea rem nesciunt sunt distinctio quibusdam consequatur eum deserunt, animi ipsum eius qui architecto, totam iure expedita reiciendis fugit. Ullam, maxime rerum reiciendis sed delectus alias nulla quae, placeat dicta doloribus distinctio labore molestias hic? Deleniti, voluptatibus laboriosam culpa nam ex minima alias rerum iure sed et odit consectetur doloribus maiores.<br/><br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque, atque quae itaque exercitationem illum tenetur nobis consequuntur excepturi fugit, possimus debitis illo quasi fuga odio neque? Eligendi officiis, velit molestias, iste reprehenderit id tempora aliquid placeat laborum, nostrum earum non cum iure nesciunt qui ipsum! Minus voluptas, omnis, tenetur maxime, magni at provident cum tempora obcaecati magnam officia cupiditate facere exercitationem neque eius. Officiis eum provident quis minus vero id, vitae quasi, doloremque iure incidunt nisi culpa eligendi magni ab consequatur. Aperiam omnis laborum autem beatae esse, ab sequi a itaque officia facere voluptatibus quas perferendis fugit dolor, praesentium nisi cum vero! Doloribus, accusantium recusandae. Recusandae eaque a aliquam aliquid magni alias repellat, fugiat velit autem sint! Ipsam ut ab aliquam nisi necessitatibus culpa dolor, autem, doloremque, blanditiis magni eaque optio at dignissimos nam consequatur vel aspernatur eveniet aut consectetur perspiciatis veniam quos fugit adipisci. Minus possimus quod fugit laudantium sint tempora esse, accusamus dolores itaque corporis facere unde maxime, dolore veritatis id odio ex asperiores enim voluptas aspernatur natus maiores? Sapiente eos libero enim quisquam consectetur itaque sint illo perspiciatis impedit, quos aspernatur, quod repellat inventore cum consequuntur a velit! Facilis dolores tempore porro blanditiis expedita iure ab.<br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod culpa magni eveniet expedita reiciendis nesciunt commodi impedit quis. Esse aliquid labore officia quos accusamus quis a, provident cum, totam culpa et earum, maiores cupiditate? At sequi sapiente esse, adipisci labore libero laudantium reprehenderit voluptas, veniam inventore nemo quas soluta deleniti distinctio magnam facere? Ipsam deleniti hic, accusantium doloremque modi reiciendis sunt ratione aspernatur quia corrupti non asperiores nesciunt quaerat inventore natus nihil quibusdam ea facilis illo voluptatibus? Similique iure, nihil laborum pariatur amet saepe blanditiis hic doloremque itaque aperiam nemo laudantium fuga consequuntur culpa odio voluptatibus? Laudantium expedita, repudiandae veniam voluptate illo excepturi magnam cupiditate sapiente officia similique a! Cupiditate magni perspiciatis cum aspernatur iusto, accusamus et quibusdam voluptatem aliquid! Animi consequuntur aliquid, nobis porro sunt harum excepturi minima autem laudantium corporis sint earum fuga voluptas vero, praesentium veritatis consequatur quo quae. Optio expedita neque dolorem sunt dicta perspiciatis provident natus? Rem deserunt quasi temporibus sequi dolore eum necessitatibus nihil non vitae consequuntur voluptate beatae in quo recusandae impedit tempore eaque iusto architecto culpa, quibusdam consectetur adipisci? Dolor veniam labore veritatis beatae deleniti culpa, modi facilis dolorem quaerat fugit, voluptatibus quae ullam explicabo molestiae rerum? Quod repellat sit obcaecati facere.
<br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis est magni laboriosam maiores voluptates id rerum tenetur dolore nihil culpa vitae, minima quae cum commodi illum et amet itaque ullam ut saepe! Quod suscipit explicabo necessitatibus in! Ut, nostrum corporis? Asperiores error eos facilis. Quis repellat deleniti in ea rem nesciunt sunt distinctio quibusdam consequatur eum deserunt, animi ipsum eius qui architecto, totam iure expedita reiciendis fugit. Ullam, maxime rerum reiciendis sed delectus alias nulla quae, placeat dicta doloribus distinctio labore molestias hic? Deleniti, voluptatibus laboriosam culpa nam ex minima alias rerum iure sed et odit consectetur doloribus maiores.<br/><br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque, atque quae itaque exercitationem illum tenetur nobis consequuntur excepturi fugit, possimus debitis illo quasi fuga odio neque? Eligendi officiis, velit molestias, iste reprehenderit id tempora aliquid placeat laborum, nostrum earum non cum iure nesciunt qui ipsum! Minus voluptas, omnis, tenetur maxime, magni at provident cum tempora obcaecati magnam officia cupiditate facere exercitationem neque eius. Officiis eum provident quis minus vero id, vitae quasi, doloremque iure incidunt nisi culpa eligendi magni ab consequatur. Aperiam omnis laborum autem beatae esse, ab sequi a itaque officia facere voluptatibus quas perferendis fugit dolor, praesentium nisi cum vero! Doloribus, accusantium recusandae. Recusandae eaque a aliquam aliquid magni alias repellat, fugiat velit autem sint! Ipsam ut ab aliquam nisi necessitatibus culpa dolor, autem, doloremque, blanditiis magni eaque optio at dignissimos nam consequatur vel aspernatur eveniet aut consectetur perspiciatis veniam quos fugit adipisci. Minus possimus quod fugit laudantium sint tempora esse, accusamus dolores itaque corporis facere unde maxime, dolore veritatis id odio ex asperiores enim voluptas aspernatur natus maiores? Sapiente eos libero enim quisquam consectetur itaque sint illo perspiciatis impedit, quos aspernatur, quod repellat inventore cum consequuntur a velit! Facilis dolores tempore porro blanditiis expedita iure ab.<br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod culpa magni eveniet expedita reiciendis nesciunt commodi impedit quis. Esse aliquid labore officia quos accusamus quis a, provident cum, totam culpa et earum, maiores cupiditate? At sequi sapiente esse, adipisci labore libero laudantium reprehenderit voluptas, veniam inventore nemo quas soluta deleniti distinctio magnam facere? Ipsam deleniti hic, accusantium doloremque modi reiciendis sunt ratione aspernatur quia corrupti non asperiores nesciunt quaerat inventore natus nihil quibusdam ea facilis illo voluptatibus? Similique iure, nihil laborum pariatur amet saepe blanditiis hic doloremque itaque aperiam nemo laudantium fuga consequuntur culpa odio voluptatibus? Laudantium expedita, repudiandae veniam voluptate illo excepturi magnam cupiditate sapiente officia similique a! Cupiditate magni perspiciatis cum aspernatur iusto, accusamus et quibusdam voluptatem aliquid! Animi consequuntur aliquid, nobis porro sunt harum excepturi minima autem laudantium corporis sint earum fuga voluptas vero, praesentium veritatis consequatur quo quae. Optio expedita neque dolorem sunt dicta perspiciatis provident natus? Rem deserunt quasi temporibus sequi dolore eum necessitatibus nihil non vitae consequuntur voluptate beatae in quo recusandae impedit tempore eaque iusto architecto culpa, quibusdam consectetur adipisci? Dolor veniam labore veritatis beatae deleniti culpa, modi facilis dolorem quaerat fugit, voluptatibus quae ullam explicabo molestiae rerum? Quod repellat sit obcaecati facere.
        <br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis est magni laboriosam maiores voluptates id rerum tenetur dolore nihil culpa vitae, minima quae cum commodi illum et amet itaque ullam ut saepe! Quod suscipit explicabo necessitatibus in! Ut, nostrum corporis? Asperiores error eos facilis. Quis repellat deleniti in ea rem nesciunt sunt distinctio quibusdam consequatur eum deserunt, animi ipsum eius qui architecto, totam iure expedita reiciendis fugit. Ullam, maxime rerum reiciendis sed delectus alias nulla quae, placeat dicta doloribus distinctio labore molestias hic? Deleniti, voluptatibus laboriosam culpa nam ex minima alias rerum iure sed et odit consectetur doloribus maiores.<br/><br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat eaque, atque quae itaque exercitationem illum tenetur nobis consequuntur excepturi fugit, possimus debitis illo quasi fuga odio neque? Eligendi officiis, velit molestias, iste reprehenderit id tempora aliquid placeat laborum, nostrum earum non cum iure nesciunt qui ipsum! Minus voluptas, omnis, tenetur maxime, magni at provident cum tempora obcaecati magnam officia cupiditate facere exercitationem neque eius. Officiis eum provident quis minus vero id, vitae quasi, doloremque iure incidunt nisi culpa eligendi magni ab consequatur. Aperiam omnis laborum autem beatae esse, ab sequi a itaque officia facere voluptatibus quas perferendis fugit dolor, praesentium nisi cum vero! Doloribus, accusantium recusandae. Recusandae eaque a aliquam aliquid magni alias repellat, fugiat velit autem sint! Ipsam ut ab aliquam nisi necessitatibus culpa dolor, autem, doloremque, blanditiis magni eaque optio at dignissimos nam consequatur vel aspernatur eveniet aut consectetur perspiciatis veniam quos fugit adipisci. Minus possimus quod fugit laudantium sint tempora esse, accusamus dolores itaque corporis facere unde maxime, dolore veritatis id odio ex asperiores enim voluptas aspernatur natus maiores? Sapiente eos libero enim quisquam consectetur itaque sint illo perspiciatis impedit, quos aspernatur, quod repellat inventore cum consequuntur a velit! Facilis dolores tempore porro blanditiis expedita iure ab.<br/><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod culpa magni eveniet expedita reiciendis nesciunt commodi impedit quis. Esse aliquid labore officia quos accusamus quis a, provident cum, totam culpa et earum, maiores cupiditate? At sequi sapiente esse, adipisci labore libero laudantium reprehenderit voluptas, veniam inventore nemo quas soluta deleniti distinctio magnam facere? Ipsam deleniti hic, accusantium doloremque modi reiciendis sunt ratione aspernatur quia corrupti non asperiores nesciunt quaerat inventore natus nihil quibusdam ea facilis illo voluptatibus? Similique iure, nihil laborum pariatur amet saepe blanditiis hic doloremque itaque aperiam nemo laudantium fuga consequuntur culpa odio voluptatibus? Laudantium expedita, repudiandae veniam voluptate illo excepturi magnam cupiditate sapiente officia similique a! Cupiditate magni perspiciatis cum aspernatur iusto, accusamus et quibusdam voluptatem aliquid! Animi consequuntur aliquid, nobis porro sunt harum excepturi minima autem laudantium corporis sint earum fuga voluptas vero, praesentium veritatis consequatur quo quae. Optio expedita neque dolorem sunt dicta perspiciatis provident natus? Rem deserunt quasi temporibus sequi dolore eum necessitatibus nihil non vitae consequuntur voluptate beatae in quo recusandae impedit tempore eaque iusto architecto culpa, quibusdam consectetur adipisci? Dolor veniam labore veritatis beatae deleniti culpa, modi facilis dolorem quaerat fugit, voluptatibus quae ullam explicabo molestiae rerum? Quod repellat sit obcaecati facere.
        </p>

*/