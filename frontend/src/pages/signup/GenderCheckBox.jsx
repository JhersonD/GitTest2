const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "Masculino" ? "selected" : ""} `}>
					<span className='label-text'>Masculino</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "Masculino"}
						onChange={() => onCheckboxChange("Masculino")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "Femenino" ? "selected" : ""}`}>
					<span className='label-text'>Femenino</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "Femenino"}
						onChange={() => onCheckboxChange("Femenino")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
