"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Service } from "@/app/lib/service-types";

export type BookingCartItem = {
  serviceId: string;
  title: string;
  duration: number;
  price: number;
};

export type PaymentMethod = "cash" | "card" | "online-transfer" | "";

type BookingContextType = {
  isOpen: boolean;
  step: 1 | 2 | 3;
  items: BookingCartItem[];
  selectedDate: string;
  selectedTime: string;
  customerName: string;
  customerEmail: string;
  paymentMethod: PaymentMethod;
  unavailableDates: string[];

  openBooking: (service?: Service, duration?: number) => void;
  closeBooking: () => void;
  goToStep: (step: 1 | 2 | 3) => void;

  addService: (service: Service, duration?: number) => void;
  removeItem: (index: number) => void;
  updateItemDuration: (index: number, duration: number, service: Service) => void;
  clearCart: () => void;

  setSelectedDate: (date: string) => void;
  setSelectedTime: (time: string) => void;
  setCustomerName: (value: string) => void;
  setCustomerEmail: (value: string) => void;
  setPaymentMethod: (value: PaymentMethod) => void;

  subtotal: number;
  totalDuration: number;
};

const BookingContext = createContext<BookingContextType | null>(null);

const DEFAULT_UNAVAILABLE_DATES = [
  "2026-04-15",
  "2026-04-20",
];

function getPriceForDuration(service: Service, duration: number) {
  return service.options.find((o) => o.duration === duration)?.price ?? 0;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [items, setItems] = useState<BookingCartItem[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [unavailableDates] = useState<string[]>(DEFAULT_UNAVAILABLE_DATES);

  function openBooking(service?: Service, duration: number = 60) {
    setIsOpen(true);
    if (service) {
      setItems((prev) => {
        const alreadyInCart = prev.some((item) => item.serviceId === service.id);
        if (alreadyInCart) return prev;
        return [
          ...prev,
          {
            serviceId: service.id,
            title: service.title,
            duration,
            price: getPriceForDuration(service, duration),
          },
        ];
      });
    }
  }

  function closeBooking() {
    setIsOpen(false);
  }

  function goToStep(nextStep: 1 | 2 | 3) {
    setStep(nextStep);
  }

  function addService(service: Service, duration: number = 60) {
    setItems((prev) => {
      const alreadyInCart = prev.some((item) => item.serviceId === service.id);
      if (alreadyInCart) return prev;

      return [
        ...prev,
        {
          serviceId: service.id,
          title: service.title,
          duration,
          price: getPriceForDuration(service, duration),
        },
      ];
    });
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function updateItemDuration(index: number, duration: number, service: Service) {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              duration,
              price: getPriceForDuration(service, duration),
            }
          : item
      )
    );
  }

  function clearCart() {
    setItems([]);
    setSelectedDate("");
    setSelectedTime("");
    setCustomerName("");
    setCustomerEmail("");
    setPaymentMethod("");
    setStep(1);
  }

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  const totalDuration = useMemo(
    () => items.reduce((sum, item) => sum + item.duration, 0),
    [items]
  );

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        step,
        items,
        selectedDate,
        selectedTime,
        customerName,
        customerEmail,
        paymentMethod,
        unavailableDates,
        openBooking,
        closeBooking,
        goToStep,
        addService,
        removeItem,
        updateItemDuration,
        clearCart,
        setSelectedDate,
        setSelectedTime,
        setCustomerName,
        setCustomerEmail,
        setPaymentMethod,
        subtotal,
        totalDuration,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
