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
            className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Have questions or ready to book your stay? Our team is
                        here to help make your experience perfect.
                    </p>
                </div>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <MapPin className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Address
                                        </h4>
                                        <p className="text-gray-600">
                                            {settings.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Phone className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Phone
                                        </h4>
                                        <p className="text-gray-600">
                                            {settings.phone}
                                        </p>
                                        <p className="text-gray-600">
                                            {settings.phone2}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Mail className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Email
                                        </h4>
                                        <p className="text-gray-600">
                                            {settings.email}
                                        </p>
                                        <p className="text-gray-600">
                                            {settings.email2}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Clock className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Reception Hours
                                        </h4>
                                        <p className="text-gray-600">
                                            {settings.reception_hour}
                                        </p>
                                        <p className="text-gray-600">
                                            {settings.reception_hour_text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-600">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        name="check_in"
                                        value={data.check_in}
                                        min={
                                            new Date()
                                                .toISOString()
                                                .split('T')[0]
                                        } // ⬅ sets min date to today's date
                                        onChange={(e) =>
                                            setData('check_in', e.target.value)
                                        }
                                        className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Check-out Date
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
                                        } // ⬅ check-out cannot be before check-in
                                        onChange={(e) =>
                                            setData('check_out', e.target.value)
                                        }
                                        className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Number of Guests
                                </label>
                                <select
                                    name="guest_number"
                                    value={data.guest_number}
                                    onChange={(e) =>
                                        setData('guest_number', e.target.value)
                                    }
                                    className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                >
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5">5+ Guests</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-amber-800"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="flex w-full items-center justify-center gap-3 rounded-md bg-amber-800 py-4 font-medium text-white transition hover:bg-amber-900 disabled:opacity-70"
                            >
                                {processing ? (
                                    <>
                                        <Loader2
                                            className="animate-spin"
                                            size={20}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
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
