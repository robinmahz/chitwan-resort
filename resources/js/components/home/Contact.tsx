import { useForm, usePage } from '@inertiajs/react';
import { Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

function useRevealOnView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, inView };
}

export default function Contact() {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>()
        .props;
    const { settings } = usePage().props as any;

    const { data, setData, post, reset, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        check_in: '',
        check_out: '',
        guest_number: '2',
        message: '',
    });
    // Toast on flash change
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, { duration: 5000 });
        }
        if (flash?.error) {
            toast.error(flash.error, { duration: 5000 });
        }
    }, [flash]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contacts', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const { ref: gridRef, inView } = useRevealOnView<HTMLDivElement>();

    return (
        <section
            id="contact"
            className="border-b border-border/50 bg-background py-14 sm:py-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center sm:mb-16">
                    <h2 className="mb-6 font-serif text-4xl font-light text-foreground md:text-5xl">
                        Connect with Us
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
                        Our concierge is dedicated to curating your perfect
                        escape. Reach out to begin your journey at Narayani
                        Vista.
                    </p>
                </div>
                <div ref={gridRef} className="grid gap-16 lg:grid-cols-2">
                    <div
                        className={`space-y-12 transition-all duration-500 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                            inView
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-6 opacity-0'
                        }`}
                    >
                        <div className="rounded-sm border border-border bg-card p-12 shadow-sm">
                            <h3 className="mb-10 font-serif text-2xl font-medium text-foreground">
                                Sanctuary Details
                            </h3>

                            <div className="space-y-10">
                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full border border-secondary/20 bg-secondary/10 p-4">
                                        <MapPin className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                            Our Location
                                        </h4>
                                        <p className="text-lg font-light text-foreground">
                                            {settings.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full border border-secondary/20 bg-secondary/10 p-4">
                                        <Phone className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                            Direct Contact
                                        </h4>
                                        <p className="text-lg font-light text-foreground">
                                            {settings.phone}
                                        </p>
                                        <p className="text-lg font-light text-foreground">
                                            {settings.phone2}
                                        </p>
                                        <p className="text-lg font-light text-foreground">
                                            078595666
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full border border-secondary/20 bg-secondary/10 p-4">
                                        <Mail className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                            Digital Inquiry
                                        </h4>
                                        <p className="text-lg font-light text-foreground">
                                            {settings.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full border border-secondary/20 bg-secondary/10 p-4">
                                        <Clock className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                            Guest Reception
                                        </h4>
                                        <p className="text-lg font-light text-foreground">
                                            {settings.reception_hour}
                                        </p>
                                        <p className="mt-1 text-sm font-light text-muted-foreground italic">
                                            {settings.reception_hour_text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`rounded-sm border border-border bg-card p-12 shadow-sm transition-all duration-500 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                            inView
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-6 opacity-0'
                        }`}
                        style={{ transitionDelay: inView ? '120ms' : '0ms' }}
                    >
                        <h3 className="mb-10 font-serif text-2xl font-medium text-foreground">
                            Concierge Request
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. john doe"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="w-full rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-2 text-xs text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2">
                                <div>
                                    <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="robin@example.com"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2">
                                <div>
                                    <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Anticipated Check-in
                                    </label>
                                    <input
                                        type="date"
                                        name="check_in"
                                        value={data.check_in}
                                        min={
                                            new Date()
                                                .toISOString()
                                                .split('T')[0]
                                        }
                                        onChange={(e) =>
                                            setData('check_in', e.target.value)
                                        }
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    />
                                </div>

                                <div>
                                    <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                        Anticipated Check-out
                                    </label>
                                    <input
                                        type="date"
                                        name="check_out"
                                        value={data.check_out}
                                        min={
                                            data.check_in ||
                                            new Date()
                                                .toISOString()
                                                .split('T')[0]
                                        }
                                        onChange={(e) =>
                                            setData('check_out', e.target.value)
                                        }
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                    Number of Nomads
                                </label>
                                <select
                                    name="guest_number"
                                    value={data.guest_number}
                                    onChange={(e) =>
                                        setData('guest_number', e.target.value)
                                    }
                                    className="w-full appearance-none rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                >
                                    <option value="1">1 Traveler</option>
                                    <option value="2">2 Travelers</option>
                                    <option value="3">3 Travelers</option>
                                    <option value="4">4 Travelers</option>
                                    <option value="5">Large Group (5+)</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-3 block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                    Special Considerations *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Share any special requirements or dreams for your stay..."
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className="w-full resize-none rounded-sm border border-border bg-background px-5 py-4 font-light transition-all outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="group flex w-full items-center justify-center gap-4 rounded-sm bg-primary py-5 text-xs font-bold tracking-[0.3em] text-white uppercase shadow-lg transition-all hover:bg-primary/90 disabled:opacity-70"
                            >
                                {processing ? (
                                    <>
                                        <Loader2
                                            className="animate-spin"
                                            size={18}
                                        />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Transmit Inquiry
                                        <Send
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
