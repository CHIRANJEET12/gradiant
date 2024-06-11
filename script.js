let direction = '';


function generateGradient() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const angle = document.getElementById('angle').value;
    
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    
    const gradientPreview = document.getElementById('gradientPreview');
    gradientPreview.style.background = gradient;
    
    const cssCode = document.getElementById('cssCode');
    cssCode.value = `background: ${gradient};`;
}

async function copyCSS() {
    const cssCode = document.getElementById('cssCode').value;
    try {
        await navigator.clipboard.writeText(cssCode);
        alert('CSS code copied to clipboard!');
    } catch (err) {
        alert('Failed to copy text: ', err);
    }
}
