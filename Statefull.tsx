import React, { useState } from 'react';
import Stateless from './Stateless';

const Statefull: React.FC = () => {
  // State untuk menyimpan indup dan output
  const [sisi, setSisi] = useState<string>('');
  const [hasil, setHasil] = useState<string>('');

  // Logika
  const handleHitung = () => {
    const sisiAngka = parseFloat(sisi);

    if (isNaN(sisiAngka) || sisiAngka <= 0) {
      setHasil('Input Tidak Valid');
      return;
    }

    const luas = sisiAngka * sisiAngka;
    setHasil(`Hasil: ${luas}`);
  };

  // Render stateless dan meneruskan state + fungsi sebagau Props
  return (
    <Stateless
    sisi={sisi}
    hasil={hasil}
    onSisiChange={setSisi}
    onHitung={handleHitung}
    />
  );
};

export default Statefull;