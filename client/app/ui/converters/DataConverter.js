class DateConverter {
    
    constructor() {
        throw new Error("Esta classe não pode ser instanciada")
    }

    static _normalizeNumerMenorQ10(number) {
        if(number < 10) {
            return '0' + number
        }
        return number
    }

    static paraTexto(data) {
        return `${this._normalizeNumerMenorQ10(data.getDate())}/${this._normalizeNumerMenorQ10(data.getMonth() + 1)}/${data.getFullYear()}`
    }

    static paraData(texto) {

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error("A data deve estar no formato aaaa-mm-dd")
        }

        return new Date (
            ...texto.split('-')
            .map((item, index) => item - index % 2)
        )
    }

}