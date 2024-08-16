function calcularCiclos() {
    // Obter valores dos inputs
    const horaDormir = document.getElementById('horaDormir').value;
    const horaAcordar = document.getElementById('horaAcordar').value;
    
    if (!horaDormir || !horaAcordar) {
        alert('Por favor, preencha ambos os horários.');
        return;
    }
    
    const [horaDormirHora, horaDormirMinuto] = horaDormir.split(':').map(Number);
    const [horaAcordarHora, horaAcordarMinuto] = horaAcordar.split(':').map(Number);
    
    // Criar objetos Date para os horários de dormir e acordar
    const dataDormir = new Date();
    dataDormir.setHours(horaDormirHora, horaDormirMinuto, 0, 0);
    
    const dataAcordar = new Date();
    dataAcordar.setHours(horaAcordarHora, horaAcordarMinuto, 0, 0);

    // Verificar se o horário de acordar é depois do horário de dormir
    if (dataAcordar <= dataDormir) {
        dataAcordar.setDate(dataAcordar.getDate() + 1); // Ajustar para o dia seguinte
    }
    
    const divResultados = document.getElementById('resultados');
    divResultados.innerHTML = '';

    // Função para calcular o horário de acordo com o número de ciclos
    function calcularHorariosAcordar(dataDormir, numeroDeCiclos) {
        const ciclosEmMinutos = numeroDeCiclos * 90;
        const dataAcordar = new Date(dataDormir.getTime() + ciclosEmMinutos * 60000);
        return dataAcordar.toTimeString().substr(0, 5);
    }

    // Calcular e exibir resultados para 3, 4 e 5 ciclos
    const ciclos = [3, 4, 5];
    ciclos.forEach(ciclo => {
        const horarioAcordar = calcularHorariosAcordar(dataDormir, ciclo);
        divResultados.innerHTML += `<p>Para ${ciclo} ciclo(s), acorde às ${horarioAcordar}</p>`;
    });

    // Limpar os campos de entrada para novos cálculos
    document.getElementById('horaDormir').value = '';
    document.getElementById('horaAcordar').value = '';
}