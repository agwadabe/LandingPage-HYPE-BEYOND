import {
  Input,
  Field,
  Label,
  Textarea,
  Select,
  Button,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ScrollAnimation from "./ScrollAnimation.jsx";

import React, { useEffect, useState } from "react";

const UserInputs = () => {
  const initialFormData = {
    nameOrCompany: "",
    email: "",
    projectType: "",
    budgetRange: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const savedData = localStorage.getItem("userInputs");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInputs", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <ScrollAnimation>
      <section id="UserInputs">
        <form className="mt-12 text-left flex justify-center" onSubmit={handleSubmit}>
          <div className="w-full max-w-md px-4">
            <h2 className="text-3xl font-bold text-nowrap mb-3">
              BEREIT FÜR DEINEN HYPE?
            </h2>
            <div className="flex gap-4 mb-3">
              <Field className="w-1/2">
                <Label className="text-sm/6 font-medium text-white">
                  NAME/FIRMA
                </Label>

                <Input
                  name="nameOrCompany"
                  type="text"
                  value={formData.nameOrCompany}
                  onChange={handleChange}
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",

                    "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  )}
                />
              </Field>

              <Field className="w-1/2">
                <Label className="text-sm/6 font-medium text-white">
                  E-MAIL
                </Label>

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",

                    "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  )}
                />
              </Field>
            </div>

            <div className="flex gap-4 mb-3">
              <Field className="w-1/2">
                <Label className="text-sm/6 font-medium text-white">
                  PROJEKTART
                </Label>
                <div className="relative">
                  <Select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={clsx(
                      "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      // Make the text of each option black on Windows
                      "*:text-black",
                    )}
                  >
                    <option value="">Bitte waehlen</option>
                    <option value="Webdesign">Webdesign</option>
                    <option value="Kampagnen">Kampagnen</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Branding">Branding</option>
                  </Select>
                  <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                  />
                </div>
              </Field>

              <Field className="w-1/2">
                <Label className="text-sm/6 font-medium text-white">
                  BUDGETRAHMEN
                </Label>
                <div className="relative">
                  <Select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className={clsx(
                      "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      // Make the text of each option black on Windows
                      "*:text-black",
                    )}
                  >
                    <option value="">Bitte waehlen</option>
                    <option value="Unter 1000">Unter 1000 EUR</option>
                    <option value="1000 bis 5000">1000 bis 5000 EUR</option>
                    <option value="5000 bis 10000">5000 bis 10000 EUR</option>
                    <option value="Über 10000">Über 10000 EUR</option>
                  </Select>
                  <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                    aria-hidden="true"
                  />
                </div>
              </Field>
            </div>

            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Nachricht/Prroduktbeschreibung
              </Label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                )}
                rows={3}
              />
            </Field>
            <div className="ctaGroup2">
              <Button
                type="submit"
                className="btnPrimary2 mx-auto mt-4 mb-4 flex w-fit items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              >
                JETZT ANGEBOT ANFORDERN
              </Button>
            </div>
          </div>
        </form>
      </section>
    </ScrollAnimation>
  );
};

export default UserInputs;
