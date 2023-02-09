import { useForm } from "react-hook-form";
import { useState } from "react";

const RegisterFormStep1 = (labelArray) => {
    const updateStep = (step)=> {
        setCurrentStep(step);
      }
    const { register, formState: { errors }, handleSubmit } = useForm({
      
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    const [currentStep, setCurrentStep] = useState(1);



    return <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <br />

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />
            <br />

            <div>
                <label>Repetir contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />
            <br />
            <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Continuar</button>
            <br />
            <br />
        </form>
    </div>
}

export default RegisterFormStep1;