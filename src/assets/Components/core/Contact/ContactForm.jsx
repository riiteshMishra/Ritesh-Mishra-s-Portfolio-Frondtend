import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


 const onSubmit = (data) => {
   const sanitizedData = {
     firstName: data.firstName
       .trim()
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;"),
     lastName: data.lastName.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
     email: data.email.trim(),
     contactNumber: data.contactNumber.trim(),
     message: data.message.trim(),
   };

   const formData = new FormData();
   formData.append(
     "clientName",
     `${sanitizedData.firstName} ${sanitizedData.lastName}`
   );
   formData.append("email", sanitizedData.email);
   formData.append("contactNumber", sanitizedData.contactNumber);
   formData.append("message", sanitizedData.message);

   console.log("Sanitized Form Data:", Object.fromEntries(formData.entries()));

   // Show success toast
   toast.success("Form submitted successfully!");
 };


  return (
    <section className="w-full max-w-[500px] flex flex-col backdrop-blur-3xl px-5 py-2 ">
      <p className="text-4xl font-semibold">You have an idea ? let's team-up</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-6"
      >
        <div className="sm:flex justify-between gap-4">
          {/* First Name */}
          <label className="flex flex-col gap-2 sm:w-[48%]">
            <p>First Name</p> 
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="FormStyle"
            />
            {errors.firstName && (
              <span className="text-red-600 text-sm capitalize">
                First name is required
              </span>
            )}
          </label>

          {/* Last Name */}
          <label className="flex flex-col gap-2 sm:w-[48%]">
            <p>Last Name</p>
            <input
              type="text"
              {...register("lastName", { required: true })}
              className="FormStyle"
            />
            {errors.lastName && (
              <span className="text-red-600 text-sm capitalize">
                Last name is required
              </span>
            )}
          </label>
        </div>
        {/* email */}
        <div>
          <label className="flex flex-col gap-2 ">
            <p>Email</p>
            <input
              type="email"
              {...register("email", { required: true })}
              className="FormStyle"
            />
            {errors.email && (
              <span className="text-red-600 text-sm capitalize">
                email is required
              </span>
            )}
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 ">
            <p>Contact Number</p>
            <input
              type="tel"
              {...register("contactNumber", {
                required: "Contact Number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/, 
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="FormStyle"
            />
            {errors.contactNumber && (
              <span className="text-red-600 text-sm capitalize">
                {errors.contactNumber.message}
              </span>
            )}
          </label>
        </div>

        <label className="flex flex-col gap-2 ">
          <p>Your message to me</p>
          <textarea
            {...register("message", { required: true })}
            className="FormStyle"
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
