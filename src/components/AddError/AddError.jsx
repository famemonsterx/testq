import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import { useCookies } from 'react-cookie'

const AddError = () => {
    const [cookies,setCookie] = useCookies('name');
    const [isSaved, setIsSaved] = useState(false);
    const saved = 'Запись сохранена';
    return (
        <div>
            <p>{ (isSaved) ? saved : '' }</p>
            <Formik
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        localStorage.setItem(localStorage.length,
                            JSON.stringify({
                                someKey: {
                                    Data: [values, Date.now(), cookies.name]
                                }})
                        )}, 1000);
                    setIsSaved(true);
                }}
                render={props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="description" component="textarea" placeholder="Описание ошибки" />
                        <Field name="status" component="select" placeholder="Статус ошибки">
                            <option value="новая">Новая</option>
                            <option value="открытая">Открытая</option>
                            <option value="решенная">Решенная</option>
                            <option value="закрытая">Закрытая</option>
                        </Field>
                        <Field name="priority" component="select" placeholder="Приоритет">
                            <option value="очень высокий">Очень высокий</option>
                            <option value="высокий">Высокий</option>
                            <option value="средний">Средний</option>
                            <option value="низкий">Низкий</option>
                        </Field>
                        <Field name="grav" component="select" placeholder="Серьезность">
                            <option value="критичная">Критичная</option>
                            <option value="значительная">Значительная</option>
                            <option value="незначительная">Незначительная</option>
                            <option value="запрос на изменение">Запрос на изменение</option>
                        </Field>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        </div>
    )
}

export default AddError