import { useState, useMemo } from 'react';
import { UserInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    validCep = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [error, setError] = useState(''),
    [search, setSearch] = useState(false),
    [loading, setLoading] = useState(false),
    [employees, setEmployees] = useState([] as UserInterface[]),
    [moreEmployees, setMoreEmployees] = useState(0);

    async function searching(cep: string) {
      setSearch(false);
      setLoading(false);
      setError('');

      try {
        const { data } = await ApiService.get<{
          diaristas: UserInterface[];
          quantidade_diaristas: number;
        }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
        setEmployees(data.diaristas);
        setMoreEmployees(data.quantidade_diaristas);
        setSearch(true);
        setLoading(false);
      }
        catch(error) {
          setError('Cep não encontrado');
          setLoading(false);
        }
    }

  return{
    cep,
    setCep,
    validCep,
    searching,
    error,
    employees,
    search,
    loading,
    moreEmployees
  }
}