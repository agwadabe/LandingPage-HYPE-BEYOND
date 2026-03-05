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

import React from "react";

const UserInputs = () => {
  return (
    <form className="mt-12 text-left flex justify-center">
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
              type="text"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",

                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
              )}
            />
          </Field>

          <Field className="w-1/2">
            <Label className="text-sm/6 font-medium text-white">E-MAIL</Label>

            <Input
              type="email"
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
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  // Make the text of each option black on Windows
                  "*:text-black",
                )}
              >
                <option value="">Webdesign</option>
                <option value="">Kampagnen</option>
                <option value="">Social Media</option>
                <option value="">Branding</option>
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
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  // Make the text of each option black on Windows
                  "*:text-black",
                )}
              >
                <option value="">1€</option>
                <option value="">1€</option>
                <option value="">1€</option>
                <option value="">1€</option>
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
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
            )}
            rows={3}
          />
        </Field>
        <Button className="inline-flex items-center  gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700">
          JETZT ANGEBOT ANFORDERN
        </Button>
      </div>
    </form>
  );
};

export default UserInputs;
