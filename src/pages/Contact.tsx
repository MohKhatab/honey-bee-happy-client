import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";
import FormTextArea from "../components/common/FormTextArea";
import { PiEnvelopeBold, PiPhoneBold } from "react-icons/pi";
import joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useMutation } from "react-query";
import { postContact } from "../services/contactService";
import { useModal } from "../components/modal/Modal";
import SuccessModal from "../components/modal/SuccessModal";
import FailModal from "../components/modal/FailModal";
import type { AxiosError } from "axios";
import { useRef } from "react";

export const formInputSchema = joi.object({
  fullName: joi.string().trim().min(2).max(100).required().messages({
    "string.empty": "Full name is required",
    "string.min": "Full name must be at least 2 characters",
    "string.max": "Full name must not exceed 100 characters",
  }),

  senderEmail: joi
    .string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),

  phone: joi
    .string()
    .trim()
    .pattern(/^\+?[0-9\s-]{7,20}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Please enter a valid phone number",
    }),

  message: joi.string().trim().min(10).max(1000).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message must be at least 10 characters",
    "string.max": "Message must not exceed 1000 characters",
  }),
  cfToken: joi.string().trim().required(),
});

export interface IFormInput {
  fullName: string;
  senderEmail: string;
  phone: string;
  message: string;
  cfToken: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: joiResolver(formInputSchema),
    mode: "onChange",
  });

  const { showModal } = useModal();
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: postContact,
    onSuccess: () => {
      turnstileRef.current?.reset();
      showModal(
        <SuccessModal message="Your message has been delivered successfully, we will respond as soon as possible" />
      );
    },
    onError: (res: AxiosError) => {
      if (res.response?.status === 429) {
        const retryAfter = res.response.headers["retry-after"];
        showModal(
          <FailModal
            message={`Please wait ${retryAfter} seconds before trying to send another message.`}
          />
        );
      } else {
        turnstileRef.current?.reset();
        showModal(
          <FailModal message="Something went wrong while trying to deliver your message, please try again or contact us through the provided phone number or email." />
        );
      }
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero */}
      <div className="w-full relative h-88 flex justify-center shadow-2xl">
        <img
          src="hero.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-grayscale-950/90 to-grayscale-950/30 -z-20"></div>
        <h1 className="text-primary-50 absolute bottom-24 text-5xl font-semibold">
          Contact Us
        </h1>
      </div>

      <div className="default-margin my-16 lg:my-24 flex flex-col md:flex-row justify-center gap-6 bg-primary-50 shadow-2xl rounded-2xl w-fit mx-auto overflow-hidden">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl p-8 lg:py-14 w-full flex flex-col gap-10 "
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-primary-500">
              Send us a message
            </h2>
            <p className="text-grayscale-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati, voluptatem?
            </p>
          </div>
          <FormInput
            placeholder="John Doe"
            label="Full Name"
            registration={register("fullName")}
            error={errors.fullName}
          />
          <FormInput
            placeholder="john@emai.com"
            label="Your Email"
            registration={register("senderEmail")}
            error={errors.senderEmail}
          />
          <FormInput
            placeholder="+123456789"
            label="Your Phone Number"
            registration={register("phone")}
            error={errors.phone}
          />
          <FormTextArea
            placeholder="lorem ipsum dolor"
            label="Your message"
            registration={register("message")}
            error={errors.message}
          />
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div>
              <Turnstile
                ref={turnstileRef}
                options={{ theme: "light", size: "flexible" }}
                siteKey="0x4AAAAAABqBJd-biJe-T8M0"
                onSuccess={(token) => setValue("cfToken", token)}
              />
              <span
                className={`${
                  errors.cfToken ? "block" : "hidden"
                } mt-1 text-sm text-red-500 text-center`}
              >
                Please verify captcha first
              </span>
            </div>
            <Button
              disabled={false}
              loading={isLoading}
              type="submit"
              classes="text-lg w-full sm:w-fit px-8 py-4 ml-auto shrink-0"
            >
              Send Message
            </Button>
          </div>
        </form>

        <div className="flex flex-col gap-8 max-w-md p-8 lg:py-14 relative">
          <img
            src="images/story.webp"
            className="absolute w-full h-full top-0 left-0 object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-grayscale-950/70"></div>
          <div className="space-y-3 z-20">
            <h2 className="text-3xl text-primary-500 font-semibold">
              Contact Information
            </h2>
            <p className="text-grayscale-100">
              Natus accusantium doloribus amet culpa perspiciatis perferendis
              repellat quasi ex.
            </p>
          </div>

          <div className="flex gap-4 z-20">
            <div className="p-2 bg-primary-400 size-12 rounded-lg">
              <PiPhoneBold className="text-primary-50" size={"100%"} />
            </div>

            <div className="flex flex-col space-y-1 text-grayscale-50">
              <span className="text-2xl font-semibold">Call Us</span>
              <span className="text-xl">+12345678234</span>
            </div>
          </div>

          <div className="flex gap-4 z-20">
            <div className="p-2 bg-primary-400 size-12 rounded-lg">
              <PiEnvelopeBold className="text-primary-50" size={"100%"} />
            </div>

            <div className="flex flex-col space-y-1 text-grayscale-50">
              <span className="text-2xl font-semibold">Email Us</span>
              <span className="text-xl">john@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
