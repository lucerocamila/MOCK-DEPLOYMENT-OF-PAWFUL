import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const updateStep = (step)=> {
    setCurrentStep(step);
  }
  const [currentStep, setCurrentStep] = useState(1);

const RegisterFormStep2 = (labelArray) => {
    const { register, formState: { errors }, handleSubmit } = useForm({
    
    });

    const onSubmit = (data) => {
        console.log(data);}
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre de usuario</label>
                    <br />

                    <input type="text" {...register('nombre', {
                        required: true,
                        maxLength: 10
                    })} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                </div>
                <br />

                <p>Seleccione su rol</p>
                <br />
                Soy cliente<input className="SyUSyP"type="checkbox" /> Soy profesional<input className="SyUSyP" type="checkbox" />
                <br />
                <br />

                <br />
            <br />
            <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Registrar</button>
            <br />


            <br />
            <br />

                
            

            </form>
        </div>
    );
};

export default RegisterFormStep2;