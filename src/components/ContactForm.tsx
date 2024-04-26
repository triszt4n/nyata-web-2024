import { Box } from "./Box";
import Checkmark from "@/icons/checkmark.svg";
import SendIcon from "@/icons/paper-plane.svg";
import clsx from "clsx";
import { FormEventHandler, useState } from "react";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setFormStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      form.reset();
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
    setTimeout(() => {
      setFormStatus("idle");
    }, 5000);
  };

  return (
    <Box shadow="right">
      <form
        action="/api/send-form"
        method="post"
        onSubmit={submitForm}
        className="flex flex-col gap-6"
      >
        <div className="text-2xl tablet:text-3xl font-bold">
          Írj nekünk itt!
        </div>
        <div className="relative w-full">
          <input
            name="name"
            required
            type="text"
            min={3}
            placeholder="Név"
            className="peer h-full w-full border-b-2 border-blue-gray-700 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-700 focus:border-gray-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-700 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Név
          </label>
        </div>
        <div className="relative w-full">
          <input
            name="email"
            required
            type="email"
            placeholder="E-mail cím"
            className="peer h-full w-full border-b-2 border-blue-gray-700 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-700 focus:border-gray-700 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
          />
          <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-700 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            E-mail cím
          </label>
        </div>
        <div className="relative w-full">
          <textarea
            className="peer h-full w-full resize-none border border-blue-gray-700 bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-700 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            rows={3}
            name="message"
          ></textarea>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[16px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:border-t before:border-l before:border-blue-gray-700 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:border-t after:border-r after:border-blue-gray-700 after:transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Message
          </label>
        </div>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              required
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
              id="check"
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <Checkmark />
            </span>
          </label>
          <label
            className="mt-px font-light text-gray-700 cursor-pointer select-none"
            htmlFor="check"
          >
            A mező bejelölésével elfogadom az{" "}
            <a
              href="/adatkezelesi.pdf"
              target="_blank"
              className="text-primary underline"
            >
              adatkezelési tájékoztatót és adatvédelmi nyilatkozatot
            </a>
          </label>
        </div>
        <button
          type="submit"
          disabled={formStatus === "loading"}
          className={clsx(
            "w-full p-4 font-display bg-primary text-white font-semibold uppercase text-3xl transition-all hover:bg-secondary flex flex-row gap-2 items-center justify-center",
            {
              "opacity-50 cursor-not-allowed": formStatus === "loading",
              "bg-red-500": formStatus === "error",
              "bg-green-500": formStatus === "success",
            }
          )}
        >
          {formStatus === "loading" ? (
            "Folyamatban..."
          ) : formStatus === "error" ? (
            "Hiba történt"
          ) : formStatus === "success" ? (
            "Sikeres küldés"
          ) : (
            <>
              <SendIcon />
              Küldés
            </>
          )}
        </button>
      </form>
    </Box>
  );
}
