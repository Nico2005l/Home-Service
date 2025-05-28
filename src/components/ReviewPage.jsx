import React, { useState } from 'react';
import Navbar from '../components/NavBar';

const ReviewPage = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        // Aquí puedes manejar el envío de la reseña
        console.log('Rating:', rating, 'Comment:', comment);
    };

    return (
        <div className="min-h-screen bg-[#081F41] flex flex-col">
            <Navbar />
            <div className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="bg-white border-2 border-[#0052CC] rounded-2xl shadow-xl p-8 w-full max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-[#081F41] mb-6">Dejá tu Reseña</h1>
                    
                    <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(null)}
                                className="text-3xl transition-transform"
                            >
                                <span className={`
                                    ${star <= (hover || rating) ? 'text-[#00C6A0]' : 'text-gray-300'}
                                    hover:scale-110
                                `}>
                                    ★
                                </span>
                            </button>
                        ))}
                    </div>

                    <textarea
                        className="w-full border border-gray-200 rounded-lg p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#00C6A0] mb-6"
                        placeholder="Contanos tu experiencia con el servicio..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white font-semibold py-3 rounded-lg transition"
                    >
                        Enviar Reseña
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
