import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import criarContaImg from '../../assets/images/CriarConta/criarConta.svg';
import Input, {InputContainer} from '../../components/Input';
import Select, {SelectContainer} from '../../components/Select';
import TextArea from '../../components/TextArea';
import SubmitButton from '../../components/SubmitButton';

//salvar as informações como estados para serem salvas

//toda pag possui um pag template
//pagtemplate defini cabeçalho e rodape

const categoria = ['Discente', 'Docente']
const funcao = ['Membro', 'Líder']
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    margin: 50px auto;
    width: 90%;
    
    @media (min-width: 768px){
        min-width: 768px;
        border: 1px solid var(--bordas);
        padding: 50px;
        border-radius: 0.8rem;
        width: 70%;
    }

`

const PublicationContainer = styled.div`

`

const FieldSet = styled.fieldset`
    border: none;
    ${PublicationContainer}+ ${PublicationContainer}{
        border-top: 1px solid var(--bordas);
        margin-top: 50px;
    padding-top: 50px;
    }
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`

const NameContainer = styled.div`
    @media (min-width: 768px){
        display: flex;
    }  
`

const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--bordas);
    border-radius: 50%;
    margin-top: 20px;

    @media (min-width: 768px){
        flex-shrink: 0;
        margin-right: 10px;
    }
`

const Name = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;
        align-items: center;

        ${InputContainer}{
            width: 100%;
        }
        ${InputContainer} + ${InputContainer}{
            margin-left: 10px;
            width: 100%;
        }            
    }
`

const Contato = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;

        ${InputContainer}{
            width: 100%;
        }
        ${InputContainer} +${InputContainer}{
            width: 30%;
            margin-left: 10px;
        }
    }
`

const Property = styled.div`

    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;  
        width: 100%; 
        
        ${SelectContainer}{
            width: 100%; 
        }
    
        ${SelectContainer}+${SelectContainer}{
            margin-left: 10px;
        }
    }  
`

const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusButton = styled.button`
    border: none;
    background-color: var(--branco);
    color: var(--secundaria);
    font-size: 1.6rem;
    font-weight: bold;
`
const TitleContainer = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;
        
        ${InputContainer}{
            width: 100%;
        }

        ${InputContainer} + ${InputContainer}{
            width: 30%;
            margin-left: 10px;
        }

    }
`

interface Publication {
    title: string,
    year: string,
    reference: string
}

//onChance sofrer modificação -> um evento
export default function CriarConta (){
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [category, setCategory] = useState('');
    const [occupation, setOccupation] = useState('');
    const [degree, setDegree] = useState('');
    const [bio, setBio] = useState('');
    const [areas, setAreas] = useState<string[]>(['']);
    const [publications, setPublications] = useState<Publication[]>([{
        title: '',
        year: '',
        reference: ''
    }]);

    //mapeamento das areas atualizadas
    //index do elemento que quero modificar
    function setAreaInteresse(position: number, value: string){
        const areasAtualizadas = areas.map((area, index) =>{
            if(index === position){
                return value;
            }
            else{
                return area;
            }
            })
            setAreas(areasAtualizadas);
    }

    //tudo o que a publicaçao corrente mais a propriedade, passada em value
    //e.preventDefault(); não execute comp padrão
    function setPublication (position: number, property: string, value: string){
        const publicationsAtualizadas = publications.map((publication, index) => {
            if(position === index){
                return(
                    {
                        ...publication,
                        [property]: value
                    }
                );
            }
        else{
            return publication;  
        }    
        })
        setPublications (publicationsAtualizadas);
    }

    function handleSubmit (e: FormEvent) {
            e.preventDefault(); 
            console.log({
            name, 
            lastname,
            email,
            phone,
            course,
            category,
            occupation,
            degree,
            bio, 
            areas,
            publications
        });
    }

    function addAreaInteresse(e: FormEvent){
        e.preventDefault();
        const areasAtualizadas = [...areas, ''];
        setAreas(areasAtualizadas);
    }

    function addPublication (e: FormEvent){
        e.preventDefault();
        const publicationsAtualizadas = [...publications, {
            title: '',
            year: '',
            reference: ''
        }]
        setPublications(publicationsAtualizadas);
    }

    return(
        <PageTemplate
            imagemSrc={criarContaImg}
            imagemAlt="Imagem de Criar conta"
            title="Criar conta"
            description="Descrição - drdfd Criar conta"
        >

            <Form onSubmit={handleSubmit}>
                <FieldSet>
                    <Legend>
                        Seus Dados
                    </Legend>

                    <NameContainer>
                        <Photo></Photo>
                        <Name>
                            <Input
                                type="text"
                                name="name"
                                label="Nome"
                                onChange= {e => setName(e.target.value)}/>
                            <Input 
                                type="text" 
                                name="lastname" 
                                label="Sobrenome"
                                onChange= {e => setLastName(e.target.value)}/>
                        </Name>                        
                    </NameContainer>
                    <Contato>
                            <Input 
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="exemplo@email.com"
                                onChange= {e => setEmail(e.target.value)}
                                />
                            <Input 
                                type="number"
                                name="phone"
                                label="Telefone"
                                placeholder="(__)9 ____ ____"
                                onChange= {e => setPhone(e.target.value)}
                                />
                    </Contato>
                    <Input 
                        type="text" 
                        name="course" 
                        label="Curso"
                        onChange= {e => setCourse(e.target.value)}/>
                    <Property>
                        <Select
                            name="category"
                            label="Categoria (discente,docente)"
                            options={categoria}
                            onChange= {e => setCategory(e.target.value)}
                        />                   
                        <Select
                            name="occupation"
                            label="Função (membro, Líder)"
                            options={funcao}
                            onChange= {e => setOccupation(e.target.value)}
                        />
                        <Select
                            name="degree"
                            label="Titulação (graduado, mestre)"
                            options={titulacao}
                            onChange= {e => setDegree(e.target.value)}
                        />
                    </Property>
                    <TextArea 
                        name="bio" 
                        label="Bio (max 300 caracteres)"
                        onChange= {e => setBio(e.target.value)}/>
                </FieldSet>   
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton onClick={addAreaInteresse}>
                            +Área
                        </PlusButton>
                    </TopFieldSet>
                    {
                        areas.map((area, index) =>{
                            return(
                                <Input key={`Area ${index}`}
                                name="area"
                                label="Área de Interesse"
                                onChange= {e => setAreaInteresse (index, e.target.value)}/>
                            )
                        })                       
                    }
                </FieldSet>
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Publicações
                        </Legend>
                        <PlusButton onClick={addPublication}>
                            +Publicações
                        </PlusButton>
                    </TopFieldSet>
                    {
                        publications.map((publication, index) =>{
                            return (
                            <PublicationContainer key={`Publication ${index}`}>
                                <TitleContainer>
                                    <Input
                                        name="publication_title" 
                                        label="Título"
                                        onChange= {e => setPublication(index, "title", e.target.value)}/>
                                    <Input 
                                        name="publication_year" 
                                        label="Ano" 
                                        onChange= {e => setPublication(index, "year", e.target.value)}/>
                                </TitleContainer>
                                <TextArea 
                                    name="publication_reference" 
                                    label="Referência ABNT (max. 300 caracteres)"
                                    onChange= {e => setPublication(index, "reference", e.target.value)}/>
                            </PublicationContainer>
                            );
                        })
                    }
                    
                </FieldSet>
                <SubmitButton type="submit">Enviar</SubmitButton>        
            </Form>
        </PageTemplate>
    );
}