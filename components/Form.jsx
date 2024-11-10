
// 'use client';
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import {User , MailIcon , ArrowRightIcon,MessageSquare} from 'lucide-react';
// const Form = () => {
//   return (
//  <form className="flex flex-col gap-y-4">
//     <div className="relative flex items-center">
//         <Input type='text' id='name' placeholder='Name'/>
//      <User className="absolute right-6 " size={20} />
//     </div>
//     <div className="relative flex items-center">
//         <Input type='email' id='email' placeholder='Email'/>
//      <MailIcon className="absolute right-6 " size={20} />
//     </div>
//     <div className="relative flex items-center">
//         <Textarea placeholder='Type your message here'/>
//      <MessageSquare className="absolute top-4 right-6 " size={20} />
//     </div>
//     <Button className='flex items-center gap-x-1 max-w-[166px] '>Let's Talk
//         <ArrowRightIcon size={20}/>
//     </Button>
//  </form>
//   )
// }

// export default Form


'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Handle input change
          placeholder="Name"
        />
        <User className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle input change
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Handle input change
          placeholder="Type your message here"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}

export default Form;
