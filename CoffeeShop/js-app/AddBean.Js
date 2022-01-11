export const BeanEntry = () => {
    return `
    <div class="newBean">
        <div>
            <input value=""
                   name="name"
                   class="newBean__input"
                   type="text"
                   placeholder="Name" />
        </div>
        <div>
            <input value=""
                   name="region"
                   class="newBean__input"
                   type="text"
                   placeholder="Region" />
        </div>

        <button id="newBean__submit">Save</button>
        <button id="newBean__cancel">Cancel</button>
    </div>
    `
}