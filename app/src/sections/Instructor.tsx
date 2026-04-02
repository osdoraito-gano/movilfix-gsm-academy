const Instructor = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen instructor */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
            Foto del Instructor
          </div>
        </div>

        {/* Texto */}
        <div>

          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Aprende con experiencia real
          </h2>

          <p className="text-slate-300 mb-4">
            Soy Luis Gómez, especialista en reparación de celulares y
            fundador de MovilFix GSM.
          </p>

          <p className="text-slate-300 mb-4">
            Durante años he trabajado resolviendo fallas reales en dispositivos
            móviles: problemas de carga, cortos en placa, microsoldadura y
            diagnóstico electrónico.
          </p>

          <p className="text-slate-300">
            Ahora mi objetivo es compartir ese conocimiento para formar nuevos
            técnicos capaces de generar ingresos con la reparación de celulares.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Instructor;