import { useState } from 'react';
import Navbar from '../components/NavBar';
import { useEffect } from 'react';
const ReviewPage = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [comment, setComment] = useState('');
    

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserid = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    alert('Debes iniciar sesión para enviar una reseña.');
                    return;
                }
                const response = await fetch('https://home-service-backend-9yhw.onrender.com/api/auth/profile',  {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Error al obtener el perfil del usuario');
                }
                const data = await response.json();
                console.log('User ID:', data.user.id); // Verifica que el ID del usuario esté en la respuesta
                setUserId(data.user.id); // Asegúrate de que el ID del usuario esté en esta ruta
            } catch (error) {
                console.error('Error fetching user ID:', error);
                alert('Hubo un problema al obtener tu información de usuario. Por favor, inténtalo de nuevo más tarde.');
            }
        };
        fetchUserid();
    }, []);
   

    const handleSubmit = () => {
        if (rating === 0 ) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            alert('Debes iniciar sesión para enviar una reseña.');
            return;
        }
        // Verifica si el usuario está autenticado
        const isAuthenticated = !!token;
        if (!isAuthenticated) {
            window.location.replace('/login');
            return; // Evita renderizar el componente si no está autenticado
        }
        // Prepara los datos de la reseña

        const reviewData = {
            rating,
            comment,
            service_id: window.location.pathname.split('/').pop(), // Obtiene el ID del servicio desde la URL
            user_id: userId, // Usa el ID del usuario obtenido
        };
        console.log('Datos de la reseña:', reviewData);
        fetch('https://home-service-backend-9yhw.onrender.com/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar la reseña');
            }
            return response.json();
        })
        .then(() => {
            window.location.replace('/servicio/'+ window.location.pathname.split('/').pop()); // Redirige al usuario a la página principal después de enviar la reseña
            setRating(0);
            setComment('');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar la reseña. Por favor, inténtalo de nuevo más tarde.');
        }
        );
    };

    return (
        <div className="min-h-screen bg-[#081F41] flex flex-col">
            <Navbar />
            <div className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="bg-white border-2 border-[#0052CC] rounded-2xl shadow-xl p-8 w-full max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-[#081F41] mb-6">Dejá tu Reseña</h1>
                    
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <div className="flex justify-center mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
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
                            type="submit"
                            className="w-full bg-[#0052CC] hover:bg-[#00C6A0] text-white font-semibold py-3 rounded-lg transition"
                        >
                            Enviar Reseña
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
