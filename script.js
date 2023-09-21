document.getElementById('mostrarCodigo').addEventListener('click', function() {
    var codigoHTML = `
        <div class="container">
            <div class="flower">
                <div class="leaf leaf-0"></div>
                <div class="leaf leaf-1"></div>
                <div class="leaf leaf-2"></div>
                <div class="leaf leaf-3"></div>
                <div class="leaf leaf-4"></div>
                <div class="leaf leaf-5"></div>
                <div class="leaf leaf-6"></div>
                <div class="leaf leaf-7"></div>
                <div class="leaf leaf-8"></div>
                <div class="leaf leaf-9"></div>
                <div class="leaf leaf-10"></div>
                <div class="leaf leaf-11"></div>
                <div class="leaf leaf-12"></div>
                <div class="leaf leaf-13"></div>
                <div class="leaf leaf-14"></div>
                <div class="leaf leaf-15"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    document.getElementById('codigoContainer').innerHTML = codigoHTML;
});