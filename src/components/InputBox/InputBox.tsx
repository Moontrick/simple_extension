import { useRef, useState, useEffect } from 'react'
import styles from './InputBox.module.scss'

export function InputBox() {
  const ref = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  function handleButtonClick() {
    if (ref.current) {
      ref.current.click()
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setSelectedFile(file)
      handleFile(file)
    }
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(true)
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)

    const files = event.dataTransfer.files
    if (files && files.length > 0) {
      const file = files[0]
      setSelectedFile(file)
      handleFile(file)
    }
  }

  function handleFile(file: File) {
    console.log('Файл выбран:', file.name, file.type, file.size)
    
    if (!file.type.startsWith('image/')) {
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        console.log('Base64 изображения:', e.target.result.toString().substring(0, 100) + '...')
      }
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    const handleWindowDragOver = (event: DragEvent) => {
      event.preventDefault()
    }

    const handleWindowDrop = (event: DragEvent) => {
      event.preventDefault()
      setIsDragging(false)
    }
    window.addEventListener('dragover', handleWindowDragOver)
    window.addEventListener('drop', handleWindowDrop)


    return () => {
      window.removeEventListener('dragover', handleWindowDragOver)
      window.removeEventListener('drop', handleWindowDrop)
    }
  }, [])

  const buttonText = selectedFile 
    ? `Выбран файл: ${selectedFile.name}`
    : isDragging 
      ? 'Отпустите файл здесь'
      : 'Перетащите изображение или нажмите'

  return (
    <div 
      className={`${styles.root} ${isDragging ? styles.dragging : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button 
        className={styles.root_button} 
        type='button' 
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
      
      {selectedFile && (
        <div className={styles.fileInfo}>
          <p>Размер: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          <p>Тип: {selectedFile.type}</p>
        </div>
      )}
      
      <input 
        ref={ref} 
        type='file' 
        className={styles.root_input}
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  )
}