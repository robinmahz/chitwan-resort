import { useForm, usePage } from '@inertiajs/react';
import { Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

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

    return (
        <section
            id="contact"
            className="bg-background py-32 border-b border-border/50"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="font-serif mb-6 text-4xl font-light text-foreground md:text-5xl">
                        Connect with Us
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
                        Our concierge is dedicated to curating your perfect escape. 
                        Reach out to begin your journey at Narayani Vista.
                    </p>
                </div>
                <div className="grid gap-16 lg:grid-cols-2">
                    <div className="space-y-12">
                        <div className="rounded-sm border border-border bg-card p-12 shadow-sm">
                            <h3 className="font-serif mb-10 text-2xl font-medium text-foreground">
                                Sanctuary Details
                            </h3>

                            <div className="space-y-10">
                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-secondary/10 p-4 border border-secondary/20">
                                        <MapPin className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-bold">
                                            Our Location
                                        </h4>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-secondary/10 p-4 border border-secondary/20">
                                        <Phone className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-bold">
                                            Direct Contact
                                        </h4>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.phone}
                                        </p>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.phone2}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-secondary/10 p-4 border border-secondary/20">
                                        <Mail className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-bold">
                                            Digital Inquiry
                                        </h4>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.email}
                                        </p>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.email2}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="rounded-full bg-secondary/10 p-4 border border-secondary/20">
                                        <Clock className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-bold">
                                            Guest Reception
                                        </h4>
                                        <p className="text-foreground font-light text-lg">
                                            {settings.reception_hour}
                                        </p>
                                        <p className="text-muted-foreground font-light text-sm italic mt-1">
                                            {settings.reception_hour_text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-sm border border-border bg-card p-12 shadow-sm">
                        <h3 className="font-serif mb-10 text-2xl font-medium text-foreground">
                            Concierge Request
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="e.g. Robin Mahz"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light"
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
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
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
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
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
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2">
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
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
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light"
                                    />
                                </div>

                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
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
                                        className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
                                    Number of Nomads
                                </label>
                                <select
                                    name="guest_number"
                                    value={data.guest_number}
                                    onChange={(e) =>
                                        setData('guest_number', e.target.value)
                                    }
                                    className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light appearance-none"
                                >
                                    <option value="1">1 Traveler</option>
                                    <option value="2">2 Travelers</option>
                                    <option value="3">3 Travelers</option>
                                    <option value="4">4 Travelers</option>
                                    <option value="5">Large Group (5+)</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block font-bold">
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
                                    className="w-full rounded-sm border border-border bg-background px-5 py-4 focus:ring-1 focus:ring-secondary focus:border-secondary outline-none transition-all font-light resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="flex w-full items-center justify-center gap-4 rounded-sm bg-primary py-5 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/90 disabled:opacity-70 shadow-lg group"
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
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
