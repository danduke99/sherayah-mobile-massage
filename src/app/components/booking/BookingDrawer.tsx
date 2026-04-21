"use client";

import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../map";
import { useBooking } from "./BookingContext";
import {
    cookie,
    playfairBold,
    playfairRegular,
    playfairSemiBold,
} from "../../styles/font/fonts";

function formatCurrency(value: number) {
    return `$${value.toFixed(2)}`;
}

function toLocalDateKey(date: Date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getCalendarDays(currentMonth: Date) {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);

    const days = [];
    const startDay = start.getDay();

    for (let i = 0; i < startDay; i += 1) {
        days.push(null);
    }

    for (let day = 1; day <= end.getDate(); day += 1) {
        days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    }

    return days;
}

function isPastDay(date: Date) {
    const now = new Date();
    const compare = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return compare < today;
}

function generateTimeSlots(selectedDate: string) {
    const slots = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
    ];

    if (!selectedDate) return slots;

    const now = new Date();
    const todayKey = toLocalDateKey(now);

    if (selectedDate !== todayKey) return slots;

    return slots.filter((slot) => {
        const [hours, minutes] = slot.split(":").map(Number);
        const slotDate = new Date(now);
        slotDate.setHours(hours, minutes, 0, 0);

        const minAllowed = new Date(now.getTime() + 3 * 60 * 60 * 1000);
        return slotDate >= minAllowed;
    });
}

function CalendarStep() {
    const {
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        unavailableDates,
    } = useBooking();

    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    const days = useMemo(() => getCalendarDays(currentMonth), [currentMonth]);
    const timeSlots = useMemo(() => generateTimeSlots(selectedDate), [selectedDate]);

    return (
        <div className="space-y-5">
            <div>
                <p className={`text-lg text-gray-800 ${playfairBold.className}`}>
                    Select date and time
                </p>
                <p className={`mt-1 text-sm text-gray-600 ${playfairRegular.className}`}>
                    Same-day bookings are allowed only if the selected time is at least 3 hours ahead.
                </p>
            </div>

            <div className="rounded-3xl border border-[#82a687]/30 bg-gradient-to-br from-[#f2fbf6]/90 via-white/60 to-[#e6f4ec]/60 p-4 shadow-[0_20px_60px_rgba(64,93,63,0.14)]">
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        onClick={() =>
                            setCurrentMonth(
                                new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                            )
                        }
                        className="rounded-full border border-[#82a687]/30 px-3 py-1 text-sm"
                    >
                        Prev
                    </button>

                    <p className={`text-base text-gray-800 ${playfairSemiBold.className}`}>
                        {currentMonth.toLocaleDateString(undefined, {
                            month: "long",
                            year: "numeric",
                        })}
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            setCurrentMonth(
                                new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                            )
                        }
                        className="rounded-full border border-[#82a687]/30 px-3 py-1 text-sm"
                    >
                        Next
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day}>{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {days.map((day, index) => {
                        if (!day) {
                            return <div key={`empty-${index}`} className="h-10" />;
                        }

                        const key = toLocalDateKey(day);
                        const disabled = isPastDay(day) || unavailableDates.includes(key);
                        const active = selectedDate === key;

                        return (
                            <button
                                key={key}
                                type="button"
                                disabled={disabled}
                                onClick={() => {
                                    setSelectedDate(key);
                                    setSelectedTime("");
                                }}
                                className={[
                                    "h-10 rounded-xl text-sm transition",
                                    active
                                        ? "bg-[#405d3f] text-white shadow-md"
                                        : "bg-white border border-[#82a687]/20 text-gray-700",
                                    disabled ? "opacity-35 cursor-not-allowed" : "hover:bg-[#bee5d7]/40",
                                ].join(" ")}
                            >
                                {day.getDate()}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <p className={`mb-3 text-sm text-gray-700 ${playfairBold.className}`}>
                    Available times
                </p>

                {!selectedDate ? (
                    <div className="rounded-2xl border border-dashed border-[#82a687]/30 px-4 py-4 text-sm text-gray-500">
                        Please choose a date first.
                    </div>
                ) : timeSlots.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#82a687]/30 px-4 py-4 text-sm text-gray-500">
                        No valid time slots remain for this date.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => {
                            const active = selectedTime === slot;
                            return (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => setSelectedTime(slot)}
                                    className={[
                                        "rounded-2xl px-4 py-3 text-sm transition border",
                                        active
                                            ? "bg-[#405d3f] text-white border-[#405d3f]"
                                            : "bg-white text-gray-700 border-[#82a687]/20 hover:bg-[#bee5d7]/40",
                                    ].join(" ")}
                                >
                                    {slot}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

function CustomerStep() {
    const {
        customerName,
        customerEmail,
        paymentMethod,
        setCustomerName,
        setCustomerEmail,
        setPaymentMethod,
        items,
        subtotal,
        totalDuration,
        selectedDate,
        selectedTime,
    } = useBooking();

    return (
        <div className="space-y-5">
            <div>
                <p className={`text-lg text-gray-800 ${playfairBold.className}`}>
                    Booking request
                </p>
                <p className={`mt-1 text-sm text-gray-600 ${playfairRegular.className}`}>
                    Enter your details to continue.
                </p>
            </div>

            <div className="rounded-3xl border border-[#82a687]/30 bg-gradient-to-br from-[#f2fbf6]/90 via-white/60 to-[#e6f4ec]/60 p-5 shadow-[0_20px_60px_rgba(64,93,63,0.14)]">
                <div className="space-y-3">
                    <input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Full name"
                        className="w-full rounded-2xl border border-gray-300/80 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#82a687]"
                    />

                    <input
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="Email address"
                        type="email"
                        className="w-full rounded-2xl border border-gray-300/80 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#82a687]"
                    />

                    <select
                        value={paymentMethod}
                        onChange={(e) =>
                            setPaymentMethod(e.target.value as "cash" | "card" | "online-transfer" | "")
                        }
                        className="w-full rounded-2xl border border-gray-300/80 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#82a687]"
                    >
                        <option value="">Select payment method</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="online-transfer">Online Transfer</option>
                    </select>
                </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <p className={`text-base text-gray-800 ${playfairBold.className}`}>
                    Booking summary
                </p>

                <div className="mt-4 space-y-3">
                    {items.map((item, index) => (
                        <div key={`${item.serviceId}-${index}`} className="flex items-center justify-between text-sm">
                            <div>
                                <p className="font-medium text-gray-800">{item.title}</p>
                                <p className="text-gray-500">{item.duration} min</p>
                            </div>
                            <p className="font-semibold text-gray-800">{formatCurrency(item.price)}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-5 border-t border-gray-200 pt-4 text-sm text-gray-700 space-y-2">
                    <div className="flex justify-between">
                        <span>Total duration</span>
                        <span>{totalDuration} min</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Date</span>
                        <span>{selectedDate || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Time</span>
                        <span>{selectedTime || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-gray-900">
                        <span>Total</span>
                        <span>{formatCurrency(subtotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BookingDrawer() {
    const {
        isOpen,
        closeBooking,
        step,
        goToStep,
        items,
        removeItem,
        updateItemDuration,
        addService,
        subtotal,
        totalDuration,
        selectedDate,
        selectedTime,
        customerName,
        customerEmail,
        paymentMethod,
        clearCart,
    } = useBooking();

    async function submitBooking() {
        const payload = {
            items,
            subtotal,
            totalDuration,
            selectedDate,
            selectedTime,
            customerName,
            customerEmail,
            paymentMethod,
        };

        console.log("BOOKING PAYLOAD:", payload);

        // Replace with your future API route
        // await fetch("/api/bookings", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // });

        alert("Booking request captured. API integration comes next.");
        clearCart();
        closeBooking();
    }

    const canContinueFromStep1 = items.length > 0;
    const canContinueFromStep2 = Boolean(selectedDate && selectedTime);
    const canSubmit =
        items.length > 0 &&
        selectedDate &&
        selectedTime &&
        customerName.trim() &&
        customerEmail.trim() &&
        paymentMethod;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                    />

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 260 }}
                        className="fixed right-0 top-0 z-[80] h-dvh w-full sm:max-w-xl lg:max-w-2xl bg-[#f6fbf8] shadow-[-10px_0_40px_rgba(0,0,0,0.16)] overflow-y-auto"
                    >
                        <div className="sticky top-0 z-10 border-b border-[#82a687]/20 bg-[#f6fbf8]/90 backdrop-blur-md px-5 py-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className={`text-[42px] leading-none text-[#2c3e50] ${cookie.className} underline`}>
                                        Book Now
                                    </p>
                                    <p className={`mt-1 text-sm text-gray-600 ${playfairRegular.className}`}>
                                        Choose your services, reserve a date, and submit your request.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeBooking}
                                    className="rounded-full border border-[#82a687]/30 bg-white/80 px-4 py-2 text-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {[1, 2, 3].map((n) => {
                                    const active = step === n;
                                    return (
                                        <div
                                            key={n}
                                            className={[
                                                "rounded-full px-3 py-2 text-center text-xs sm:text-sm border",
                                                active
                                                    ? "bg-[#405d3f] text-white border-[#405d3f]"
                                                    : "bg-white/80 text-gray-600 border-[#82a687]/20",
                                            ].join(" ")}
                                        >
                                            {n === 1 ? "Cart" : n === 2 ? "Date & Time" : "Details"}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="px-5 py-5 sm:px-6 sm:py-6">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="rounded-3xl border border-[#82a687]/30 bg-gradient-to-br from-[#f2fbf6]/90 via-white/50 to-[#e6f4ec]/60 p-5 shadow-[0_20px_60px_rgba(64,93,63,0.14)]">
                                        <p className={`text-lg text-gray-800 ${playfairBold.className}`}>
                                            Your selected services
                                        </p>

                                        {items.length === 0 ? (
                                            <div className="mt-4 rounded-2xl border border-dashed border-[#82a687]/60 px-4 py-6 text-sm text-gray-500">
                                                No services added yet.
                                            </div>
                                        ) : (
                                            <div className="mt-4 space-y-4">
                                                {items.map((item, index) => {
                                                    const service = services.find((s) => s.id === item.serviceId);
                                                    if (!service) return null;

                                                    return (
                                                        <div
                                                            key={`${item.serviceId}-${index}`}
                                                            className="rounded-2xl bg-white/80 p-4 shadow-xl"
                                                        >
                                                            <div className="flex items-start justify-between gap-4">
                                                                <div>
                                                                    <p className={`text-base text-gray-800 ${playfairSemiBold.className}`}>
                                                                        {item.title}
                                                                    </p>
                                                                    <p className={`mt-1 text-sm text-gray-500 ${playfairRegular.className}`}>
                                                                        Select your duration
                                                                    </p>
                                                                </div>

                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeItem(index)}
                                                                    className="text-sm bg-red-600 py-1 px-2 rounded-xl text-white hover:bg-red-800 hover:cursor-pointer"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>

                                                            <div className="mt-4 grid grid-cols-2 gap-3">
                                                                {service.options.map((option) => {
                                                                    const active = item.duration === option.duration;
                                                                    return (
                                                                        <button
                                                                            key={option.duration}
                                                                            type="button"
                                                                            onClick={() =>
                                                                                updateItemDuration(index, option.duration, service)
                                                                            }
                                                                            className={[
                                                                                "rounded-2xl border px-4 py-3 text-left transition",
                                                                                active
                                                                                    ? "bg-[#405d3f] text-white border-[#405d3f]"
                                                                                    : "bg-white text-gray-700 border-[#82a687]/20 hover:bg-[#bee5d7]/40",
                                                                            ].join(" ")}
                                                                        >
                                                                            <p className="font-medium">{option.label}</p>
                                                                            <p className="text-sm opacity-90">{formatCurrency(option.price)}</p>
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                    <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                        <p className={`text-base text-gray-800 ${playfairBold.className}`}>
                                            Add another service
                                        </p>

                                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {services
                                                .filter(
                                                    (service) =>
                                                        !items.some((item) => item.serviceId === service.id)
                                                )
                                                .map((service) => (
                                                    <button
                                                        key={service.id}
                                                        type="button"
                                                        onClick={() => addService(service, 60)}
                                                        className="rounded-2xl border border-[#82a687]/20 bg-gradient-to-br from-white to-[#f2fbf6] px-4 py-4 text-left transition hover:bg-[#bee5d7]/40"
                                                    >
                                                        <p className={`text-sm text-gray-800 ${playfairSemiBold.className}`}>
                                                            {service.title}
                                                        </p>
                                                        <p className={`mt-1 text-xs text-gray-500 ${playfairRegular.className}`}>
                                                            From {formatCurrency(service.options[0].price)}
                                                        </p>
                                                    </button>
                                                ))}
                                        </div>
                                    </div>

                                    <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                        <div className="space-y-2 text-sm text-gray-700">
                                            <div className="flex justify-between">
                                                <span>Total duration</span>
                                                <span>{totalDuration} min</span>
                                            </div>
                                            <div className="flex justify-between font-semibold text-gray-900">
                                                <span>Subtotal</span>
                                                <span>{formatCurrency(subtotal)}</span>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            disabled={!canContinueFromStep1}
                                            onClick={() => goToStep(2)}
                                            className={`mt-5 w-full rounded-full bg-[#405d3f] hover:bg-[#2e4c2d] transition text-white py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed ${playfairBold.className}`}
                                        >
                                            Continue to date & time
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <CalendarStep />

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => goToStep(1)}
                                            className="w-full rounded-full border border-[#82a687]/30 bg-white py-3 px-6"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            disabled={!canContinueFromStep2}
                                            onClick={() => goToStep(3)}
                                            className={`w-full rounded-full bg-[#405d3f] hover:bg-[#2e4c2d] transition text-white py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed ${playfairBold.className}`}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <CustomerStep />

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => goToStep(2)}
                                            className="w-full rounded-full border border-[#82a687]/30 bg-white py-3 px-6"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            disabled={!canSubmit}
                                            onClick={submitBooking}
                                            className={`w-full rounded-full bg-[#405d3f] hover:bg-[#2e4c2d] transition text-white py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed ${playfairBold.className}`}
                                        >
                                            Submit booking request
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}