import React, { useState } from 'react'

const useSelect = (stateInicial, opciones) => {
    const [state, setState] = useState(stateInicial)

    const SelectData = () => (
        <div className="col-span-6 sm:col-span-3 w-full sm:w-1/2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Categoria
            </label>
            <select
                id="country"
                value={state}
                onChange={e => setState(e.target.value)}
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                {
                    opciones.map(opcion => (
                        <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                    ))
                }
            </select>
        </div>
    )
    
    return [state, SelectData]   
    
}

export default useSelect
