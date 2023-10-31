'use client'
// Contact component
import React, {useRef, useState} from "react";
import {ContactProps} from "@/components/profile";
import {FaCheckCircle} from "react-icons/fa";

const Contact: React.FC<ContactProps> = () => {
        const [formData,setFormData] = useState({})
        const [loading,setLoading] = useState<boolean>(false)
        const [response,setResponse] = useState<string | null>(null)
        const formRef = useRef<HTMLFormElement | null>(null);
        const saveData = (evt: any) => {
                setFormData({
                        ...formData,
                        [evt.target.name]: evt.target.value
                })
        }

        const sendData = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
                evt.preventDefault();
                setLoading(true);
                setResponse(null);

                await fetch('https://johnespitia.com/php/contact.php', {
                        body: JSON.stringify(formData),
                        cache: 'no-cache',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        credentials: 'same-origin',
                        method: 'POST',
                        mode: 'no-cors',
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                });

                setLoading(false);
                setResponse("success");

                setTimeout(() => {
                        if(formRef.current !== null){
                                formRef.current.reset()
                        }

                        setResponse(null);
                }, 5000);
        };
        return <section id="contact-form" className="mt-8">
                <h2 className="text-xl font-bold mb-2">Contact Me</h2>
                <form ref={formRef} className="grid grid-cols-2 gap-4" onSubmit={sendData}>
                        <div>
                                <label htmlFor="name" className="block mb-1">
                                        Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    onInput={saveData}
                                    name="name"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                />
                        </div>
                        <div>
                                <label htmlFor="email" className="block mb-1">
                                        Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    onInput={saveData}
                                    name="email"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                />
                        </div>
                        <div className="col-span-2">
                                <label htmlFor="message" className="block mb-1">
                                        Message:
                                </label>
                                <textarea
                                    onInput={saveData}
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                ></textarea>
                        </div>
                        <div className="col-span-2">
                                <button disabled={loading || response != null} type={"submit"} className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md">
                                        Send
                                </button>
                        </div>
                        {loading && <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                        </div>}
                        {response === "success" && <div className="bg-green-200 text-green-800 border-l-4 border-green-500 p-4">
                                <div className="flex">
                                        <div className="flex-shrink-0">
                                                <FaCheckCircle />
                                        </div>
                                        <div className="ml-3">
                                                <p className="text-sm leading-5 font-medium">
                                                        <span>Mail sent, I will communicate with you as soon as possible</span>
                                                </p>
                                        </div>
                                </div>
                        </div>}
                </form>
        </section>
}

export default Contact