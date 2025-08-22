'use client'

import { ErrorMessage, Field, Form as Formikform, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import { ContactFormData } from "@/types/Hero";
import { ToastContainer, toast } from "react-toastify";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too long")
    .required("Your name is required"),
  email: Yup.string().email("Invalid Email").required("email is required"),
  subject: Yup.string().max(100, "Too Long!"),
  message: Yup.string().required("Message is required"),
});

const InitialValues: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const metadata = {
  title: "Contact Us - My Website",
  description:
    "Get in touch with us. Find our address, contact info, and more.",
};

export default function Contact() {
  const handleSubmit = (
    values: ContactFormData,
    { resetForm }: FormikHelpers<ContactFormData>
  ) => {
    console.log("Form Submitted:", values);
    toast.success("Message sent Successfully");

    resetForm();
  };
  return (
    <div className="container mx-auto px-52">
      <div className="grid grid-cols-3 py-24 gap-32">
        <div className="col-span-1 row-span-3 space-y-8 ">
          <h1 className="text-3xl medium font-[var(--font-family2)]">
            Contact Us
          </h1>
          <div className="border-b space-y-4 py-4">
            <div className="flex justify-items-start items-center gap-4">
              <Image
                src="/img/contact-icon1.jpg"
                width={34}
                height={40}
                alt="Adress"
              />
              <h4 className="bold text-xl font-[var(--font-family2)]">
                Adress
              </h4>
            </div>
            <div className="">
              <p>123 Main Street, Anytown, CA 12345 </p>
              <p>– USA</p>
            </div>
          </div>
          <div className="border-b space-y-4 py-4">
            <div className="flex justify-items-start items-center gap-4">
              <Image
                src="/img/contact-icon2.jpg"
                width={34}
                height={40}
                alt="Adress"
              />
              <h4 className="bold text-xl font-[var(--font-family2)]">Phone</h4>
            </div>
            <div className="">
              <p>Mobile: (08) 123 456 789 </p>
              <p>Hotline: 1009 678 456</p>
            </div>
          </div>
          <div className="border-b space-y-4 py-4">
            <div className="flex justify-items-start items-center gap-4">
              <Image
                src="/img/contact-icon3.jpg"
                width={34}
                height={40}
                alt="Adress"
              />
              <h4 className="bold text-xl font-[var(--font-family2)]">Email</h4>
            </div>
            <div className="">
              <p>yourmail@domain.com </p>
              <p>support@example.company</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 ">
          <h1 className="text-[32px] medium font-[var(--font-family2)]">
            Tell Us Your Message
          </h1>
          <Formik
            validationSchema={ContactSchema}
            initialValues={InitialValues}
            onSubmit={handleSubmit}
          >
            <Formikform className="space-y-8 ">
              <div>
                <label>Your Name</label>
                <Field name="name" className="border p-2 w-full" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
               <div>
          <label>Your Email</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div>
          <label>Subject</label>
          <Field name="subject" className="border p-2 w-full" />
          <ErrorMessage name="subject" component="div" className="text-red-500" />
        </div>

        <div>
          <label>Message</label>
          <Field as="textarea" name="message" className="border p-2 w-full" />
          <ErrorMessage name="message" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-black text-white px-4 py-2 ">
         SEND
        </button>
            </Formikform>
            
          </Formik>
<ToastContainer />
        </div>
      </div>
    </div>
  );
}
