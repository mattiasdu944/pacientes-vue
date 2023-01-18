<template>
    <div class="text-center text-white mb-5">
        <h2 class="text-3xl font-bold ">Formulario</h2>
        <p class="text-xl font-semibold ">Registra a tus pacientes</p>
    </div>

    <div class="bg-white rounded-md shadow-lg px-5 py-8">
        <form>
            <div class="mb-5">
                <label for="">Nombre/s:</label>
                <input type="text" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Apellidos:</label>
                <input type="text" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Correo electronico</label>
                <input type="email" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>


            <div class="mb-5">
                <label for="">Fecha de la cita</label>
                <input type="date" class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
            </div>

            <div class="mb-5">
                <label for="">Sintomas:</label>
                <textarea class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
            </div>

            <button type="submit" class="w-full bg-indigo-600 py-2 rounded-md text-white font-bold hover:bg-indigo-800 transition-all">
                Agrendar cita
            </button>
        </form>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>